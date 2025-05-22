
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Objectives = () => {
  const objectives = [
    "To be a national party that promotes the unity of all the people of the Republic of Kenya.",
    "To form national and county governments that will at all times act in the best interests of the people of Kenya at national and county levels.",
    "To support, promote and facilitate devolution as a system of governance in Kenya.",
    "To promote vigilance in safeguarding the national interests of Kenya.",
    "To serve as a vigorous and conscious political vanguard for eradicating tribal, racial and social bigotry, economic discrimination, and exploitation and elimination of all forms of oppression.",
    "To promote the creation of a conducive environment for the operation of the co-operative movement, trade unions, professional organizations, welfare associations and non-governmental organizations.",
    "To respect and preserve the national heritage, history, cultural diversity, national monuments, historical sites, and archives for the good and enjoyment of posterity.",
    "To engage in and provide quality, equitable, transparent, and accountable leadership to the people of Kenya.",
    "To participate in elections for the purpose of forming government at the national and county levels.",
    "To promote democratic political governance based on the popular will and voices of the people.",
    "To stop lesbian, gay, bisexual, transgender LGBTQ in the country and promote cultural and religious beliefs."
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-party-lightblue/10 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Party <span className="text-party-green">Objectives</span>
          </h2>
          <div className="w-24 h-1 bg-party-green mx-auto my-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Forty-Seven Voices Party is committed to achieving these key objectives for a better Kenya
          </p>
        </div>
        
        <Card className="shadow-2xl hover:shadow-2xl transition-shadow border-none rounded-xl overflow-hidden max-w-5xl mx-auto">
          <div className="h-3 bg-party-green"></div>
          <CardHeader className="bg-gradient-to-r from-white to-gray-50">
            <CardTitle className="text-3xl text-party-green">Our Objectives</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 px-8 pb-10">
            <div className="grid grid-cols-1 gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-party-green text-white flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg pt-1.5">{objective}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Objectives;
