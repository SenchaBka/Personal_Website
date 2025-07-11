import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import bgImage from '../assets/photos/matrix-pills.jpg';
import bgPhotographer from '../assets/photos/photographer_bg.jpg'
import bgSoftware from '../assets/photos/software_bg.jpg'

export default function HeroSplit() {
  const [hovered, setHovered] = useState(null);
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    if (hovered === null && !chosen) {
      setChosen(true);
    }
  }, [hovered, chosen]);

  const overlayOpacity = hovered === null
    ? 1
    : hovered === 'left' || hovered === 'right'
    ? 0.4
    : 1;

  return (
    <div className="flex h-screen w-full overflow-hidden relative">
      {/* Global Background Image */}
      <AnimatePresence>
        {!chosen && (
          <motion.div
            key="bg"
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${bgImage})` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: overlayOpacity }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* LEFT SIDE */}
      <motion.div
        className={`flex-1 flex items-center justify-center relative z-10 overflow-hidden transition-all duration-500 ${
          hovered === 'left' ? 'flex-[3]' : hovered === 'right' ? 'flex-[1]' : ''
        }`}
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgPhotographer})` }}
          animate={{ opacity: hovered === 'left' ? 0.6 : 0.2 }}
          transition={{ duration: 0.5 }}
        />
        {/* Text */}
        <motion.div
          className="z-10 backdrop-blur-md bg-black/30 p-4 rounded"
          animate={{ opacity: hovered === 'left' ? 1 : 0.7, scale: hovered === 'left' ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white">Photography</h1>
        </motion.div>
      </motion.div>

      {/* Center line */}
      <motion.div className="w-[2px] bg-white z-10" />

      {/* RIGHT SIDE */}
      <motion.div
        className={`flex-1 flex items-center justify-center relative z-10 overflow-hidden transition-all duration-500 ${
          hovered === 'right' ? 'flex-[3]' : hovered === 'left' ? 'flex-[1]' : ''
        }`}
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgSoftware})` }}
          animate={{ opacity: hovered === 'right' ? 0.6 : 0.2 }}
          transition={{ duration: 0.5 }}
        />
        {/* Text */}
        <motion.div
          className="z-10 backdrop-blur-md bg-black/30 p-4 rounded"
          animate={{ opacity: hovered === 'right' ? 1 : 0.7, scale: hovered === 'right' ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white">Software Engineering</h1>
        </motion.div>
      </motion.div>
    </div>
  );
}
