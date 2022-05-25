import styles from "./CancelButton.module.css";

const CancelButton = (props) => {
  return <button className={styles.cancelBtn}>{props.children}</button>;
};

export default CancelButton;
