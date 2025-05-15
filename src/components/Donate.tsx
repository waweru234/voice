
import { motion } from "framer-motion";

const Donate = () => {
  return (
    <section id="donate" className="py-20 bg-gradient-to-r from-party-gold/20 to-party-green/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-party-gold">Support</span> the Movement
          </h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Make a Donation</h3>
                <p className="text-gray-700">
                  Your contribution will help us advance our mission of giving every Kenyan a voice.
                  Support our grassroots movement and help us build a better Kenya.
                </p>
                
                <div className="bg-party-gold/10 p-6 rounded-lg border border-party-gold">
                  <h4 className="font-semibold text-lg mb-2">M-Pesa Details</h4>
                  <div className="space-y-3">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Phone Number</span>
                      <span className="font-medium text-lg">+254 742 478456</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Business Name</span>
                      <span className="font-medium">Voices of Kenya</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-500 italic">
                  For international donations or other payment methods, please contact us directly.
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 mb-6">
                  <img 
                    src="/lovable-uploads/2cf903d4-8b6e-4e88-b487-edc75db7e4a9.png" 
                    alt="Party Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-center text-gray-700 font-medium">
                  Thank you for supporting<br />Voices of Kenya
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;
