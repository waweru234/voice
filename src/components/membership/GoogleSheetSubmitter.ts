import { FormData } from "./FormSchema";

// Google Sheet submission function
export const submitToGoogleSheet = async (data: FormData) => {
  // This is the URL for your Google Apps Script web app that will handle the form submission
  // You'll need to replace this with your actual deployed Google Apps Script web app URL
  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyXoOKvxY6Xda1CWg0APICaFjhRzViyylAZjG080Xn8QARnTqA3uMzXus-Umkje80tu/exec";
  
  try {
    // Create a modified data object with the formatted phone number
    const formattedData = {
      ...data,
      contact: data.contact.replace("+", "")
    };
    
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });
    
    console.log("Google Sheets submission attempt completed");
    return true;
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return false;
  }
};
