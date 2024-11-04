import { frame2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  const handleScanClick = () => {
    window.open('https://docs.google.com/forms/d/1qaVZGS4nVFuJXJL7x4xykSKqJ-U3yIVkqLlCHxLc0Cw/', '_blank'); // Replace with your Google Form link
  };

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Image Scanner
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Quickly scan images and documents into high-quality digital files.
          Smart cropping and enhancement features ensure the best possible reproduction.
        </p>

        <Button styles={`mt-10`} onClick={handleScanClick} />
      </div>

      <div className={layout.sectionImg}>
        <img src={frame2} alt="scan" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
