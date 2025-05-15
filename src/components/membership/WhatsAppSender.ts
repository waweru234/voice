
import { FormData } from "./FormSchema";

// WhatsApp message function
export const sendWhatsAppMessage = (data: FormData) => {
  // Format the phone number by removing the + symbol
  const formattedContact = data.contact.replace("+", "");
  
  // Format the message for WhatsApp
  const message = `New Member Registration:
Full Name: ${data.fullName}
ID/Passport: ${data.idNumber}
Gender: ${data.gender}
Marital Status: ${data.maritalStatus}
Address: ${data.address}
Contact: ${formattedContact}
County: ${data.county}
Constituency: ${data.constituency}
Ward: ${data.ward}
Polling Station: ${data.pollingStation}
Membership Type: ${data.membershipType}`;
  
  console.log("WhatsApp message prepared:", message);
  
  // Create WhatsApp link
  const phoneNumber = "254742478456"; // Kenya format without the + symbol
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappLink, "_blank");
  
  return true;
};
