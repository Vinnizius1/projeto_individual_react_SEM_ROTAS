import Button from "../button/Button";
import { Title } from "../title/Title";
import styles from "./ValidCard.module.css";

const ValidCard = (props) => {
  // Fecha o cartão
  function closeValidCard () {
    props.fechaValidCard(false)
  }

  // Fecha todos os modais porventura abertos
  function goTo(boolean) {
    props.navegarPara(boolean);
  }

  return (
    <div className={styles.finalBackground}>
      <div className={styles.finalContainer}>
        <Title texto="Recibo de Pagamento" navegarPara={goTo}/>

        <div className={styles.body}>
          <p>O pagamento foi concluído com <b>sucesso</b>.</p>
        </div>

        <div className={styles.footer}>
            <Button secondary="secondary" fechaValidCard={closeValidCard}>Voltar</Button>
        </div>
      </div>
    </div>
  );
};

export default ValidCard;
