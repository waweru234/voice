
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Ideology = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-party-lightblue/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Party <span className="text-party-brown">Ideology</span>
          </h2>
          <div className="w-24 h-1 bg-party-brown mx-auto my-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our actions
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-2xl hover:shadow-2xl transition-shadow border-none rounded-xl overflow-hidden">
          <div className="h-3 bg-party-brown"></div>
          <CardHeader className="bg-gradient-to-r from-white to-gray-50">
            <CardTitle className="text-3xl text-party-brown">NATIONALISM</CardTitle>
            <Separator className="my-2 bg-party-brown/30" />
          </CardHeader>
          <CardContent className="pt-8 px-8 pb-10">
            <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
              <p className="mb-6">
                The ideology of the Forty-Seven Voices Party derives from its orientation of national identity and unity where it is people-oriented and all-inclusive. Consequently, the principles of our party shall be based on national unity, national pride, patriotism, pan-African tendencies and sovereignty of the Kenyan people because it is established to promote and defend the rights and welfare of the masses where the will of the people is paramount.
              </p>
              <p className="mb-6">
                We shall uplift the conditions of life of all Kenyans, the prosperity and stability of the nation, and guarantee the reign of equity, justice and a period to be proud of being a Kenyan citizen.
              </p>
              <p className="font-medium text-party-brown">
                In furtherance of the above, the ideology of the VOICES Party and its members shall be Nationalism. Therefore, our party shall promote national values and principles.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ideology;
