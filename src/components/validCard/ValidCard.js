import { Link } from "react-router-dom";
import CancelButton from "../cancelButton/CancelButton";
import styles from "./ValidCard.module.css";

const ValidCard = () => {
  return (
    <div className={styles.finalBackground}>
      <div className={styles.finalContainer}>
        <h1 className={styles.h1}>Olá VALID </h1>
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
