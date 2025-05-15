
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartySlogan from "@/components/PartySlogan";
import Vision from "@/components/Vision";
import Objectives from "@/components/Objectives";
import Ideology from "@/components/Ideology";
import Message from "@/components/Message";
import Gallery from "@/components/Gallery";
import Leadership from "@/components/Leadership";
import Donate from "@/components/Donate";
import MembershipForm from "@/components/MembershipForm";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Mail, 
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Padding for fixed navbar */}
        <Hero />
        
        <div className="bg-gradient-to-br from-party-lightblue/30 via-white/80 to-party-gold/30">
          <PartySlogan />
        </div>
        
        <Vision />
        <Objectives />
        <Ideology />
        <Message />
        <Leadership />
        <Gallery />
        <Donate />
        <MembershipForm />
        {/* Contact/Call to Action Section (Join the Movement) */}
        <section id="contact" className="py-20 bg-gradient-to-r from-party-gold to-party-hotpink relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <img 
              src="/lovable-uploads/2cf903d4-8b6e-4e88-b487-edc75db7e4a9.png" 
              alt="Logo Background" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the Movement</h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto mb-10">
              Become part of a growing movement focused on building a better Kenya for all. Together, we can make a difference.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-party-gold hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl flex items-center mx-auto"
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register Now
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
        
        
        
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-white p-1">
                    <img 
                      src="/lovable-uploads/2cf903d4-8b6e-4e88-b487-edc75db7e4a9.png" 
                      alt="Party Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-party-gold">VOICES OF KENYA</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  A national political party that stands for progress, good governance, 
                  and a united, prosperous Kenya.
                </p>
                <p className="text-party-gold font-medium">"Sauti Kila Mahali"</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-6 text-party-gold">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#top" className="text-gray-400 hover:text-white transition-colors hover:underline">Home</a></li>
                  <li><a href="#leadership" className="text-gray-400 hover:text-white transition-colors hover:underline">About</a></li>
                  <li><a href="#slogan" className="text-gray-400 hover:text-white transition-colors hover:underline">Slogan</a></li>
                  <li><a href="#message" className="text-gray-400 hover:text-white transition-colors hover:underline">Manifesto</a></li>
                  <li><a href="#donate" className="text-gray-400 hover:text-white transition-colors hover:underline">Donate</a></li>
                  <li><a href="#join" className="text-gray-400 hover:text-white transition-colors hover:underline">Join Us</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-6 text-party-gold">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="text-party-gold mr-3 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-400">info@voicesofkenya.org</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="text-party-gold mr-3 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-400">+254 742 478456</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="text-party-gold mr-3 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-400">Nairobi, Kenya</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-6 text-party-gold">Connect</h4>
                <div className="flex space-x-4 mb-6">
                  <a href="https://www.facebook.com/share/1AQhcmSd6Z" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-party-gold transition-colors">
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a href="https://www.instagram.com/thevoicecenter2027?igsh=MWpqMjJ4aDUxOWs4dw==" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-party-gold transition-colors">
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a href="https://youtube.com/@beijingvideo857?si=1M0U_Dyj_Ul02a_9" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-party-gold transition-colors">
                    <Youtube size={18} className="text-white" />
                  </a>
                </div>
                <p className="text-gray-400">
                  Stay updated with our latest news and events by following us on social media.
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Forty Seven Voices of Kenya Party. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
