
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface LeaderProps {
  name: string;
  role: string;
  image: string;
}

const leadershipTeam: LeaderProps[] = [{
  name: "Wycliffe Kamanda Gichuru",
  role: "National Chairperson and Party Founder",
  image: "/lovable-uploads/0266e8af-6d34-4c02-8bc3-b5203bc131d5.png"
}, {
  name: "Jibril Manyasa",
  role: "Secretary General",
  image: "/lovable-uploads/bf3e08b0-1631-4d2d-8b64-849276bbee0c.png"
}, {
  name: "Aaron Kibet",
  role: "Chief Head of Protocol",
  image: "/lovable-uploads/e5e25e88-bd79-4dd0-a9e3-53e288db933a.png"
}, {
  name: "Evelynn Nzembih Ngui",
  role: "Human Resource Manager",
  image: "/lovable-uploads/d9703b7c-155e-4ecd-9fd5-6e6d13768c60.png"
}, {
  name: "Florence Mathenge",
  role: "Chief Strategy Forty-Seven Voices",
  image: "/lovable-uploads/639e6316-2794-4807-8275-96fc85688dba.png"
}, {
  name: "Tom Muhanda",
  role: "National Council of Elders (Wisdom Chamber Chairperson)",
  image: "/lovable-uploads/b1cbe2a4-28ab-4a77-91f6-c8fcf29ecdb2.png"
}];

const Leadership = () => {
  return <section id="leadership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Leadership
          </motion.h2>
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="h-1 w-24 bg-party-gold mx-auto mb-6"></motion.div>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team behind Forty Seven Voices of Kenya Party - committed to serving the Kenyan people and advancing our shared vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((leader, index) => <motion.div key={leader.name} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1 * index
        }}>
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 relative overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-center object-cover" />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                  <p className="text-party-gold font-medium mb-3">{leader.role}</p>
                  <div className="h-1 w-12 bg-gradient-to-r from-party-gold to-party-hotpink"></div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

export default Leadership;
