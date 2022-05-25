import styles from "./Title.module.css";

export const Title = (props) => {
  return (
    <div className={styles.title}>
      <p>{props.texto}</p>
    </div>
  );
};
