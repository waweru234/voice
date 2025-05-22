
import { motion } from "framer-motion";

const FormHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-cinzel">
        Join the Movement
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Become part of a growing movement focused on building a better Kenya for all. 
        Together, we can make a difference.
      </p>
    </motion.div>
  );
};

export default FormHeader;
