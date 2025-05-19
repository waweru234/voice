
import { motion } from "framer-motion";

const PartySlogan = () => {
  return (
    <div id="slogan" className="py-32 relative overflow-hidden">
      {/* Enhanced gradient background with more vibrant colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-party-lightblue/30 via-white/90 to-party-gold/30 z-0"></div>
      
      {/* Larger and more visible decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-party-green/20 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-party-hotpink/20 rounded-full translate-y-1/2 -translate-x-1/4"></div>
      
      {/* More pronounced animated patterns */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 border-4 border-party-gold/40 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ repeat: Infinity, duration: 5 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 w-40 h-40 border-4 border-party-green/40 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
      ></motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-10 max-w-3xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-party-gold shadow-xl">
              <img 
                src="/lovable-uploads/2cf903d4-8b6e-4e88-b487-edc75db7e4a9.png" 
                alt="Party Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-party-hotpink via-party-gold to-party-green text-center mb-6"
          >
            "SAUTI KILA MAHALI"
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl text-gray-700 text-center italic font-medium"
          >
            Every voice matters. Every Kenyan counts.
          </motion.p>
          
          <div className="mt-10 flex justify-center">
            <div className="h-2 w-56 bg-gradient-to-r from-party-gold via-party-green to-party-hotpink rounded-full shadow-md"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartySlogan;
