import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, FormData } from "./FormSchema";
import { submitToGoogleSheet } from "./GoogleSheetSubmitter";
import { sendWhatsAppMessage } from "./WhatsAppSender";
import SubmissionMethod from "./SubmissionMethod";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

// County and constituency data
const countyConstituencyMap: Record<string, string[]> = {
  // ... (keep your existing countyConstituencyMap data)
};

// List of Kenya counties in alphabetical order
const counties = Object.keys(countyConstituencyMap).sort();

// List of Kenyan tribes/ethnic groups
const ethnicGroups = [
  "Kikuyu", "Luhya", "Kalenjin", "Luo", "Kamba", "Kisii", "Meru", 
  "Mijikenda", "Somali", "Maasai", "Turkana", "Samburu", "Pokot", 
  "Taita", "Embu", "Tharaka", "Mbeere", "Kuria", "Suba", "Iteso", 
  "Borana", "Gabra", "Rendile", "Orma", "Burji", "Nubian", 
  "Asian", "European", "Arab", "Other"
].sort();

interface RegistrationFormProps {
  submissionMethod: "both" | "form" | "whatsapp";
  setSubmissionMethod: (method: "both" | "form" | "whatsapp") => void;
}

const RegistrationForm = ({ submissionMethod, setSubmissionMethod }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedConstituencies, setSelectedConstituencies] = useState<string[]>([]);

  // Initialize the form with react-hook-form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      idNumber: "",
      gender: "",
      maritalStatus: "",
      address: "",
      contact: "",
      county: "",
      constituency: "",
      ward: "",
      pollingStation: "",
      membershipType: "",
      ethnicity: "",
      hasDisability: "",
    },
  });

  // Watch for county changes to update constituency options
  const selectedCounty = form.watch("county");
  
  // Update constituencies when county changes
  React.useEffect(() => {
    if (selectedCounty) {
      const constituencies = countyConstituencyMap[selectedCounty] || [];
      setSelectedConstituencies(constituencies);
      // Reset constituency value when county changes
      form.setValue("constituency", "");
    }
  }, [selectedCounty, form]);

  // Combined submit handler
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      let googleSheetsSuccess = true;
      
      // Submit to Google Sheets if selected
      if (submissionMethod === "form" || submissionMethod === "both") {
        googleSheetsSuccess = await submitToGoogleSheet(data);
      }
      
      // Send WhatsApp message if selected
      let whatsappSuccess = true;
      if (submissionMethod === "whatsapp" || submissionMethod === "both") {
        whatsappSuccess = sendWhatsAppMessage(data);
      }
      
      if (googleSheetsSuccess || whatsappSuccess) {
        toast.success("Registration submitted successfully!");
        form.reset();
      } else {
        toast.error("Failed to submit registration. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred during submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      <h3 className="text-xl font-bold mb-6">Membership Registration</h3>
      
      <SubmissionMethod 
        submissionMethod={submissionMethod}
        setSubmissionMethod={setSubmissionMethod}
      />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Names</FormLabel>
                  <FormControl>
                    <Input placeholder="Christopher Waweru" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National ID/Passport Number</FormLabel>
                  <FormControl>
                    <Input placeholder="ID/Passport Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Address/Diaspora State</FormLabel>
                  <FormControl>
                    <Input placeholder="Your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Official Contact</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+254 XXX XXX XXX" 
                      type="tel" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="county"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>County</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select county" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[200px] overflow-y-auto">
                      {counties.map((county) => (
                        <SelectItem key={county} value={county}>
                          {county}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="constituency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Constituency</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    value={field.value}
                    disabled={!selectedCounty}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={selectedCounty ? "Select constituency" : "Select county first"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[200px] overflow-y-auto">
                      {selectedConstituencies.map((constituency) => (
                        <SelectItem key={constituency} value={constituency}>
                          {constituency}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="ward"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ward</FormLabel>
                  <FormControl>
                    <Input placeholder="Your ward" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="pollingStation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Polling Station</FormLabel>
                  <FormControl>
                    <Input placeholder="Your polling station" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {/* New Ethnicity Field */}
          <FormField
            control={form.control}
            name="ethnicity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ethnicity/Tribe</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your ethnic group" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[200px] overflow-y-auto">
                    {ethnicGroups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* New Disability Field */}
          <FormField
            control={form.control}
            name="hasDisability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you have any disability?</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="disability-yes" />
                      <Label htmlFor="disability-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="disability-no" />
                      <Label htmlFor="disability-no">No</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="membershipType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Membership Subscription</FormLabel>
                <FormControl>
                  <RadioGroup 
                    onValueChange={field.onChange} 
                    value={field.value}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ordinary" id="ordinary" />
                      <Label htmlFor="ordinary">Ordinary membership - Ksh 200</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="silver" id="silver" />
                      <Label htmlFor="silver">Silver member - Ksh 2,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bronze" id="bronze" />
                      <Label htmlFor="bronze">Bronze member - Ksh 5,000-10,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gold" id="gold" />
                      <Label htmlFor="gold">Gold membership - Ksh 20,000-100,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="platinum" id="platinum" />
                      <Label htmlFor="platinum">Platinum membership - Ksh 500,000-1,000,000</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-party-gold hover:bg-party-gold/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Submit Registration"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegistrationForm;
