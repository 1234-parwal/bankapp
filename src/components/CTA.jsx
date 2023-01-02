import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} rounded-[20px] bg-black-gradient-2 sm:flex-row flex-col`}>
      <div className="flex flex-1 flex-col font-poppins">
        <h4 className={styles.heading2}>Let's try our services now!</h4>
        <p className={`${styles.paragraph} mt-5 max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className = {`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
      </section>
  );
};

export default CTA;