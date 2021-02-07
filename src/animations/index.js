export const fromTop = {
   hidden: {
      opacity: 0,
      y: "-50vw",
   },
   visible: {
      opacity: 1,
      y: 0,
   },
   exit: {
      opacity: 0,
      y: "-10vw",
   },
}

export const fromRight = {
   hidden: {
      x: "100vw",
   },
   visible: {
      x: 0,
      transition: { type: "twin", duration: 0.5 },
   },
   exit: {
      x: "100vw",
      transition: { ease: "easeInOut" },
   },
}

export const fade = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: { duration: 0.5 },
   },
   exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
   },
}

export const fadeLeftSpring = {
   hidden: {
      opacity: 0,
      x: "-100vw",
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" },
   },
   exit: {
      opacity: 0,
      x: "-100vw",
      transition: { ease: "easeInOut" },
   },
}

export const fadeRightSpring = {
   hidden: {
      opacity: 0,
      x: "100vw",
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" },
   },
   exit: {
      opacity: 0,
      x: "100vw",
      transition: { ease: "easeInOut" },
   },
}
