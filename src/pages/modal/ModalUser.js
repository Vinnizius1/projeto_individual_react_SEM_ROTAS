import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIPost } from "../../data/APIPost";
import { cards } from "../../data/cartoes";
import Button from "../../components/button/Button";
import CancelButton from "../../components/cancelButton/CancelButton";
import styles from "./ModalUser.module.css";
import ValidCard from "../../components/validCard/ValidCard";
import InvalidCard from "../../components/invalidCard/InvalidCard";

// Máscara pro Input de valor R$
function numbersOnly(string) {
  let valor = string;
  valor = valor.replace(/\D/g, "");
  valor = valor.replace(/(\d{1,2})$/, ",$1");
  valor = valor.replace(/(\d)(?=(zd{3})+(?!\d))/g, "$1.");
  return valor;
}

// COMPONENTE
function ModalUser() {
  /* useParams */
  const { name } = useParams();

  /* useState */
  const [card_number, setCard_Number] = useState("1111111111111111");
  const [value_input, setValue_Input] = useState("");
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);

  /* Função handleSubmit do formulário de pagamento */
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(APIPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card_number),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Aprovada" && card_number === "4111111111111234") {
          setInvalid(true);
        } else if (data.status === "Aprovada") {
          setValid(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.modalBackground}>
      {valid && <ValidCard />}
      {invalid && <InvalidCard />}
      <div className={styles.modalContainer}>
        <div className={styles.title}>
          <p>
            Pagamento para <span>{name}</span>
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
              <Button>Pagar</Button>
              <Link to="/">
                <CancelButton>Cancelar</CancelButton>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalUser;
