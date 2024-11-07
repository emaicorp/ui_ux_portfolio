import { useEffect, useRef } from "react";
import styles from "./ProgressBar.module.css"; // Import CSS module

const ProgressBar = ({ label, value }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (progress) {
      progress.style.width = `${value}%`;
    }
  }, [value]);

  return (
    <div className={styles.progressBarContainer}>
      <span className={styles.label}>{label}</span>
      <div className={styles.progressBackground}>
        <div
          ref={progressRef}
          className={styles.progress}
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
