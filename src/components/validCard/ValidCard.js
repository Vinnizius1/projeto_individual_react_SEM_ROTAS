import { Link } from "react-router-dom";
import CancelButton from "../cancelButton/CancelButton";
import { Title } from "../title/Title";
import styles from "./ValidCard.module.css";

const ValidCard = () => {
  return (
    <div className={styles.finalBackground}>
      <div className={styles.finalContainer}>
        <Title texto="Recibo de Pagamento" />

        <div className={styles.body}>
          <p>O pagamento foi concluído com <b>sucesso</b>.</p>
        </div>

        <div className={styles.footer}>
          <Link to="/">
            <CancelButton>Voltar</CancelButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ValidCard;
