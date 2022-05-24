import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { APIPost } from "../../data/APIPost";
import styles from "./styles.module.css";
import { cartaoInvalido, cartaoValido } from "../../data/cartoes";

// COMPONENTE
function ModalUser() {
  /* useParams */
  const { name } = useParams();

  /* useState com os números (em string) do cartão selecionado */
  const [card_number, setCard_Number] = useState("1111111111111111");

  /* useNavigate para voltar pra tela principal - Home - após o resultado do POST */
  const navigate = useNavigate();

  /* Função handleSubmit do formulário de pagamento */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (card_number === "1111111111111111") {
      fetch(APIPost, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartaoValido),
      })
        .then((response) => response.json())
        .then((data) => {
          handleValidCard(data);
        })
        .catch((err) => console.log(err));
    } else if (card_number === "4111111111111234") {
      fetch(APIPost, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartaoInvalido),
      })
        .then(() => handleInvalidCard())
        .catch((err) => console.log(err));
    }
  };

  /* Função handleInvalidCard para lidar com os dados do POST */
  function handleInvalidCard() {
    // Seleciona as 3 div´s principais da DOM no Modal
    const title = document.querySelector(`.${styles.title}`);
    const body = document.querySelector(`.${styles.body}`);
    const footer = document.querySelector(`.${styles.footer}`);

    title.innerHTML = "Cartão Inválido";
    body.innerHTML = "Cartão Inválido";
    footer.innerHTML = "Cartão Inválido";

    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  /* Função handleValidCard para lidar com os dados do POST */
  function handleValidCard(dadosDoPost) {
    const title = document.querySelector(`.${styles.title}`);
    const body = document.querySelector(`.${styles.body}`);
    const footer = document.querySelector(`.${styles.footer}`);

    title.innerHTML = dadosDoPost.status;
    body.innerHTML = dadosDoPost.status;
    footer.innerHTML = dadosDoPost.status;

    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.title}>
          <p>
            Pagamento para <span>{name}</span>
          </p>
        </div>

        <div className={styles.body}>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="R$ 0,00" required />

            <select
              title="Selecione o seu cartão de crédito"
              id="creditCard"
              value={card_number}
              onChange={(e) => setCard_Number(e.target.value)}
            >
              <option value="1111111111111111">Cartão com final 1111</option>
              <option value="4111111111111234">Cartão com final 1234</option>
            </select>

            <div className={styles.footer}>
              <button type="submit">Pagar</button>
              <Link to="/">
                <button id={styles.cancelBtn}>Cancelar</button>
              </Link>
            </div>
          </form>
        </div>

        {/* <div className={styles.footer}>
          <Button />

          <Link to="/">
            <button id={styles.cancelBtn}>Cancelar</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default ModalUser;
