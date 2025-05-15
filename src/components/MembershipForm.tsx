
import React, { useState } from "react";
import { motion } from "framer-motion";
import FormHeader from "./membership/FormHeader";
import RegistrationForm from "./membership/RegistrationForm";
import MemberRights from "./membership/MemberRights";

const MembershipForm = () => {
  const [submissionMethod, setSubmissionMethod] = useState<"both" | "form" | "whatsapp">("both");

  return (
    <section id="join" className="py-20 bg-gradient-to-r from-party-lightblue/30 to-party-gold/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <FormHeader />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <RegistrationForm 
                submissionMethod={submissionMethod} 
                setSubmissionMethod={setSubmissionMethod} 
              />
            </div>
            
            <div>
              <MemberRights />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipForm;
