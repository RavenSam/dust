import { motion } from "framer-motion"

export default function Bubble({
   r = "20",
   x = "50%",
   y = "50%",
   bg = "var(--color-primary)",
   a = 1,
   z = 0,
   d = 1,
   t = 2,
}) {
   const bubbleStyle = {
      position: "absolute",
      borderRadius: "100%",
      width: r,
      height: r,
      background: bg,
      top: y,
      left: x,
      opacity: a,
      zIndex: z,
      animation: "float 10s ease-in-out infinite",
   }

   return (
      <motion.div
         style={bubbleStyle}
         initial={{ opacity: 0 }}
         animate={{ opacity: a }}
         transition={{ delay: d, duration: t }}
      ></motion.div>
   )
}
