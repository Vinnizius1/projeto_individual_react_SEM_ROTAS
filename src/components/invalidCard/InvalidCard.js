import { Link } from "react-router-dom";
import CancelButton from "../cancelButton/CancelButton";
import { Title } from "../title/Title";
import styles from "./InvalidCard.module.css";

const InvalidCard = () => {
  return (
    <div className={styles.finalBackground}>
      <div className={styles.finalContainer}>
        <Title texto="Recibo de Pagamento" />

        <div className={styles.body}>
          <p>
            O pagamento <b>não</b> foi concluído com sucesso.
          </p>
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

export default InvalidCard;
