
const MemberRights = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 sticky top-24">
      <h3 className="text-xl font-bold mb-4">Member Rights</h3>
      <div className="space-y-4">
        <p className="text-sm text-gray-700">Every member has the right to:</p>
        
        <ul className="space-y-3 text-sm text-gray-600 list-disc pl-5">
          <li>Participate and contribute to discussions, formulation and implementation of party policies, programs and plans.</li>
          <li>Receive and impact information on all aspects of party policies, programs and activities.</li>
          <li>Offer constructive criticism to any member, official, policy, program, activity or actions of the party without victimization.</li>
          <li>Submit proposals or statements to the party.</li>
          <li>Actively participate in party activities and programs.</li>
          <li>Petition any structure of the party on any aspects of the party programs, activities or documents.</li>
          <li>Benefit from the work, activities and programs or opportunities offered by the party without any form of bias or prejudice.</li>
        </ul>
        
        <div className="text-sm text-gray-700 pt-2 border-t">
          <p className="font-medium">Important Notice:</p>
          <p className="mt-2">A member holding either a public office courtesy of the party or holding a party position convicted of crimes under national or international law that attracts a sentence of over six (6) months may lose their membership rights.</p>
        </div>
      </div>
    </div>
  );
};

export default MemberRights;
