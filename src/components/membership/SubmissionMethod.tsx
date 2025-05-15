
import { Label } from "@/components/ui/label";

interface SubmissionMethodProps {
  submissionMethod: "both" | "form" | "whatsapp";
  setSubmissionMethod: (method: "both" | "form" | "whatsapp") => void;
}

const SubmissionMethod = ({ submissionMethod, setSubmissionMethod }: SubmissionMethodProps) => {
  return (
    <div className="mb-6">
      <Label className="text-base mb-2 block">Submission Method</Label>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <input 
            type="radio" 
            id="both" 
            name="submissionMethod" 
            value="both"
            checked={submissionMethod === "both"}
            onChange={() => setSubmissionMethod("both")}
            className="h-4 w-4"
          />
          <Label htmlFor="both">Submit to form & WhatsApp</Label>
        </div>
        <div className="flex items-center space-x-2">
          <input 
            type="radio" 
            id="form" 
            name="submissionMethod" 
            value="form"
            checked={submissionMethod === "form"}
            onChange={() => setSubmissionMethod("form")}
            className="h-4 w-4"
          />
          <Label htmlFor="form">Submit to form only</Label>
        </div>
        <div className="flex items-center space-x-2">
          <input 
            type="radio" 
            id="whatsapp" 
            name="submissionMethod" 
            value="whatsapp"
            checked={submissionMethod === "whatsapp"}
            onChange={() => setSubmissionMethod("whatsapp")}
            className="h-4 w-4"
          />
          <Label htmlFor="whatsapp">Send to WhatsApp only</Label>
        </div>
      </div>
    </div>
  );
};

export default SubmissionMethod;
