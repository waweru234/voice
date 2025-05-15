
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle } from "lucide-react";

const Vision = () => {
  return (
    <div id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-party-hotpink">Vision</span> & <span className="text-party-lightblue">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-party-hotpink mx-auto my-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a united Kenya where every voice matters
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-party-hotpink to-party-lightblue"></div>
            <CardHeader className="bg-gradient-to-r from-white to-gray-50">
              <CardTitle className="text-3xl text-party-hotpink flex items-center gap-3">
                <Circle className="h-6 w-6 fill-party-hotpink text-white" />
                PARTY VISION
              </CardTitle>
              <CardDescription className="text-lg">Our aspirations for Kenya's future</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                The Vision of the Party is to transform Kenya into a just, Modern and a prosperous Nation; 
                a country united in pursuit of Happiness and in which, Every Kenyan Citizen has equal and 
                fair chance to be their best, where every Voice is represented and listened to. 
                Voices party will treat all Kenyans the same regardless of their religion, tribe and race.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-party-lightblue to-party-green"></div>
            <CardHeader className="bg-gradient-to-r from-white to-gray-50">
              <CardTitle className="text-3xl text-party-lightblue flex items-center gap-3">
                <Circle className="h-6 w-6 fill-party-lightblue text-white" />
                PARTY MISSION
              </CardTitle>
              <CardDescription className="text-lg">How we will achieve our vision</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide a platform for Kenyans to speak their minds in transforming the country, and to inspire, 
                equip, facilitate and harness the synergies of Kenya towards transforming their own lives and those 
                of their children. To create a fundamental shift in the management of public affairs for the good 
                of all Kenyan people.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Vision;
