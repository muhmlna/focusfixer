import { apple, bill, google, frame1 } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";

const Billing = () => {
  const handleEnhanceClick = () => {
    window.open('https://forms.gle/ABNpBwWjW33rsgTc8', '_blank'); // Replace with your Google Form link
  };

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={frame1} alt="enhance" className="w-[100%] h-[100%] relative z-[5]" />
        
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Image Enhancement
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Automatically correct angles, rotations, and perspectives.
          Adjust brightness, contrast, and sharpness to improve image quality.
          User-friendly interface that requires no prior editing experience.
        </p>

        <Button styles={`mt-10`} onClick={handleEnhanceClick} />
      </div>
    </section>
  );
};

export default Billing;
