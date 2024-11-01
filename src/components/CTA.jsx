import styles from "../style";
import Button from "./Button";

const CTA = () => {
  const handleBackToProduct = () => {
    window.location.href = "#product"; // Adjust this based on your routing
  };

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          FocusFixer refines your images to make your impact truly remarkable.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button onClick={handleBackToProduct} />
      </div>
    </section>
  );
};

export default CTA;
