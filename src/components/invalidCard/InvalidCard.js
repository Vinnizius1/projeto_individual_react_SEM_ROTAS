import { Link } from "react-router-dom";
import CancelButton from "../cancelButton/CancelButton";
import styles from "./InvalidCard.module.css";

const InvalidCard = () => {
  return (
    <div className={styles.finalBackground}>
      <div className={styles.finalContainer}>
        <h1 className={styles.h1}>Olá INVALID</h1>
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
