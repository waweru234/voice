import * as z from "zod";

// Define schema for form validation
export const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  idNumber: z.string().min(1, "ID/Passport number is required"),
  gender: z.string().min(1, "Gender is required"),
  maritalStatus: z.string().min(1, "Marital status is required"),
  address: z.string().min(1, "Address is required"),
  contact: z.string().min(1, "Contact number is required"),
  county: z.string().min(1, "County is required"),
  constituency: z.string().min(1, "Constituency is required"),
  ward: z.string().min(1, "Ward is required"),
  pollingStation: z.string().min(1, "Polling station is required"),
  membershipType: z.string().min(1, "Membership type is required"),
  ethnicity: z.string().min(1, "Ethnicity is required"),
  hasDisability: z.boolean().default(false),
});

export type FormData = z.infer<typeof formSchema>;
