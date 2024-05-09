import styles from "./Button.module.css";

export default function Button({ type, text, action }) {
  return (
    <div role="button" onClick={action} className={styles.buttonCont}>
      <img
        src={
          type === "small" 
            ? "./images/smallButtonBg.svg"
            : "./images/largeButtonBg.svg"
        }
        aria-hidden
      />
      <p>{text}</p>
    </div>
  );
}
