import Button from "../button/Button";
import { Title } from "../title/Title";
import styles from "./InvalidCard.module.css";

const InvalidCard = (props) => {
  // Fecha o cartão
  function closeInvalidCard() {
    props.setValid("modal");
  }

  // Fecha todos os modais porventura abertos
  function goTo() {
    props.setValid("home");
  }

  return (
    <div className={styles.finalBackground}>
      <div className={styles.finalContainer}>
        <Title texto="Recibo de Pagamento" goTo={goTo} />

        <div className={styles.body}>
          <p>
            O pagamento <b>não</b> foi concluído com sucesso.
          </p>
        </div>

        <div className={styles.footer}>
          <Button color="secondary" executaFuncao={closeInvalidCard}>
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvalidCard;
