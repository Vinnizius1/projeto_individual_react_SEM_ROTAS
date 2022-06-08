import styles from "./Title.module.css";

export const Title = (props) => {
  return (
    <div className={styles.title}>
      <p className={styles.p}>{props.texto}</p>
      <p className={styles.x}  onClick={() => {
          props.navegarPara();
        }}>X</p>
    </div>
  );
};
