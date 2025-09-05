import { motion } from "framer-motion";
import { useState} from "react";

import bgPhotographer from "../assets/photos/photographer_bg.jpg"
import bgSoftware from "../assets/photos/software_bg.jpg"

export default function HeroSplit(){
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex h-screen w-full overflow-hidden relative">
      {/*Left Side*/}
      <motion.div
        className="flex-1 flex items-center justify-center relative z-10 overflow-hidden"
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
        animate={{flex: hovered === "left" ? 3 : hovered === "right" ? 1 : 1}}
        transition={{duration: 0.5}}
      >
        {/*Background*/}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: `url(${bgPhotographer})`}}
          animate={{opacity: hovered === "left" ? 0.6 : 0.2}}
          transition={{duration: 0.5}}
        />
        {/*Text*/}
        <motion.div
          className="z-10 backdrop-blur-md bg-black/30 p-4 rounded"
          animate={{
            opacity: hovered === "left" ? 1 : 0.7,
            scale: hovered === "left" ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white">Photography</h1>
        </motion.div>
      </motion.div>

      {/*Divider*/}
      <motion.div className="w-[2px] bg-white z-10" />

      {/*Right Side*/}
      <motion.div
        className="flex-1 flex items-center justify-center relative z-10 overflow-hidden"
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
        animate={{flex: hovered === "right" ? 3 : hovered === "left" ? 1 : 1}}
        transition={{duration: 0.5}}
      >
        {/*Background*/}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: `url(${bgSoftware})`}}
          animate={{opacity: hovered === "right" ? 0.6 : 0.2}}
          transition={{duration: 0.5}}
        />
        {/*Text*/}
        <motion.div
          className="z-10 backdrop-blur-md bg-black/30 p-4 rounded"
          animate={{
            opacity: hovered === "right" ? 1 : 0.7,
            scale: hovered === "right" ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white">Software</h1>
        </motion.div>
      </motion.div>
    </div>
  );
}