// motionVariants.js  
export const fadeInUp = {  
    whileInView: { opacity: 1, y: 0 },  
    initial: { opacity: 0, y: 100 },    // Сдвиг вверх 
    transition: { duration: 0.5 },  
  };  

  export const fadeIn = {  
    whileInView: { opacity: 1, y: 0 },  
    initial: { opacity: 0, y: -100 },       // Сдвиг вниз
    transition: { duration: 0.5 },  
  };  
  
  export const fadeInLeft = {  
    whileInView: { opacity: 1, x: 0 },  
    initial: { opacity: 0, x: -100 }, // Сдвиг влево 
    transition: { duration: 0.5 },  
  };  
  
  export const fadeInRight = {  
    whileInView: { opacity: 1, x: 0 },  
    initial: { opacity: 0, x: 100 }, // Сдвиг вправо  
    transition: { duration: 0.5 },  
  };  
  
  export const container = (delay) => ({  
    hidden: { x: -100, opacity: 0 },  
    visible: {  
      x: 0,  
      opacity: 1,  
      transition: {  
        duration: 0.5,  
        delay: delay,  
      },  
    },  
  });