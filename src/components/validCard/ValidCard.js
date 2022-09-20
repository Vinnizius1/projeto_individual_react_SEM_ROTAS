import Button from "../button/Button";
import { Title } from "../title/Title";
import styles from "./ValidCard.module.css";

const ValidCard = (props) => {
  // Fecha o cartão
  function closeValidCard() {
    props.setValid(1);
  }

  // Fecha os modais porventura abertos
  function goTo() {
    props.setValid(0);
  }

  return (
    <div className={styles.finalBackground}>
      <div className={styles.finalContainer}>
        <Title texto="Recibo de Pagamento" goTo={goTo} />

        <div className={styles.body}>
          <p>
            O pagamento foi concluído com <b>sucesso</b>.
          </p>
        </div>

        <div className={styles.footer}>
          <Button color="secondary" executaFuncao={closeValidCard}>
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ValidCard;
