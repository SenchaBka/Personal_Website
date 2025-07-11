import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSplit() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* LEFT SIDE - Photography */}
      <motion.div
        className={`flex-1 flex items-center justify-center bg-black relative transition-all duration-500 ${
          hovered === 'left' ? 'flex-[3]' : hovered === 'right' ? 'flex-[1]' : ''
        }`}
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
      >
        <motion.div
          className="z-10"
          animate={{ opacity: hovered === 'left' ? 1 : 0.6, scale: hovered === 'left' ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">Photography</h1>
        </motion.div>
        {/* Optional background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/assets/photos/sample.jpg')` }}
          animate={{ opacity: hovered === 'left' ? 0.5 : 0.1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Center line */}
      <motion.div className="w-[2px] bg-white" />

      {/* RIGHT SIDE - Software Engineering */}
      <motion.div
        className={`flex-1 flex items-center justify-center bg-gray-900 relative transition-all duration-500 ${
          hovered === 'right' ? 'flex-[3]' : hovered === 'left' ? 'flex-[1]' : ''
        }`}
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
      >
        <motion.div
          className="z-10"
          animate={{ opacity: hovered === 'right' ? 1 : 0.6, scale: hovered === 'right' ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">Software Engineering</h1>
        </motion.div>
        {/* Optional background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/assets/photos/code.jpg')` }}
          animate={{ opacity: hovered === 'right' ? 0.5 : 0.1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
}