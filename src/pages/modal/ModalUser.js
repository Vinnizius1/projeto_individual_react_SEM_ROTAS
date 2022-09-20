import { useState } from "react";
import Button from "../../components/button/Button";
import styles from "./ModalUser.module.css";
import { APIPost } from "../../data/APIPost";
import { cards } from "../../data/cartoes";

/* Máscara pro Input de valor R$ */
function numbersOnly(string) {
  let valor = string;
  // valor = valor.replace(/\D/g, "");
  // valor = valor.replace(/(\d{1,2})$/, ",$1");
  // valor = valor.replace(/(\d)(?=(zd{3})+(?!\d))/g, "$1.");

  // valor = valor.replace(/\D/g, '')
  //              .replace(/^0*/, '')
  //              .padStart(3, '0');
  // valor = `${valor.slice(0, -2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')},${valor.slice(-2)}`

  /*  Nova máscara! */
  valor = valor.toString();
  valor = valor.replace(/[\D]+/g, "");
  valor = valor.replace(/([0-9]{2})$/g, ",$1");

  if (valor.length >= 6) {
    while (/([0-9]{4})[,|.]/g.test(valor)) {
      valor = valor.replace(/([0-9]{2})$/g, ",$1");
      valor = valor.replace(/([0-9]{3})[,|.]/g, ".$1");
    }
  }

  return valor;
}

/* COMPONENTE */
export default function ModalUser(props) {
  // Dados do cartão
  const [card_number, setCard_Number] = useState("1111111111111111");
  const [value_input, setValue_Input] = useState("");

  // fechaModal
  function closeModal() {
    props.setValid(0);
  }

  // abreCartaoValido
  function openValidCard() {
    props.setValid(2);
  }

  // abreCartaoInvalido
  function openInvalidCard() {
    props.setValid(3);
  }

  // Função handleSubmit do formulário de pagamento
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    fetch(APIPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card_number),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Aprovada" && card_number === "4111111111111234") {
          openInvalidCard();
        } else if (data.status === "Aprovada") {
          openValidCard();
        }
      })
      .catch((err) => console.log(err));
  };

  // RETURN
  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.title}>
            <p>
              {props.titulo} <span>{props.subtitulo}</span>
            </p>
          </div>

          <div className={styles.body}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="R$ 0,00"
                value={numbersOnly(value_input)}
                onChange={(e) => setValue_Input(numbersOnly(e.target.value))}
                required
              />

              <select
                value={card_number}
                onChange={(e) => setCard_Number(e.target.value)}
              >
                <option disabled>Número do Cartão</option>
                {cards.map((card) => {
                  return (
                    <option key={card.card_number} value={card.card_number}>
                      Cartão com final {card.card_number.substring(12)}
                    </option>
                  );
                })}
              </select>

              <div className={styles.footer}>
                <Button color="primary" tipoDoBotao="submit" executaFuncao={handleSubmit}>
                  Pagar
                </Button>

                <Button color="secondary" executaFuncao={closeModal}>
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
