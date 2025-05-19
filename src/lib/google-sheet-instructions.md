
# How to Connect Your Form to Google Sheets

## Step 1: Create a Google Sheet
1. Go to [Google Drive](https://drive.google.com/) and create a new Google Sheet
2. Name it "Voices of Kenya - Member Registrations" or similar
3. Create headers in the first row matching your form fields: 
   - Full Name
   - ID Number
   - Gender
   - Marital Status
   - Address
   - Contact
   - County
   - Constituency
   - Ward
   - Polling Station
   - Membership Type
   - Timestamp

## Step 2: Set Up Google Apps Script
1. In your Google Sheet, go to Extensions > Apps Script
2. Delete any code in the editor and paste the following script:

```javascript
// Google Apps Script to handle form submissions to this Google Sheet
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add timestamp
    const timestamp = new Date();
    
    // Append data to the sheet
    sheet.appendRow([
      data.fullName,
      data.idNumber,
      data.gender,
      data.maritalStatus,
      data.address,
      data.contact,
      data.county,
      data.constituency,
      data.ward,
      data.pollingStation,
      data.membershipType,
      timestamp
    ]);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy as Web App
1. Click the "Deploy" button and select "New deployment"
2. For deployment type, choose "Web app"
3. Fill in the following:
   - Description: "Voices of Kenya Member Registration Form"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy" and authorize the app when prompted
5. Copy the Web app URL that appears after deployment

## Step 4: Update Your Website Code
1. Take the URL you copied in Step 3
2. In your MembershipForm.tsx file, replace this line:
   ```javascript
   const googleScriptUrl = "https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec";
   ```
   with your actual URL:
   ```javascript
   const googleScriptUrl = "https://script.google.com/macros/s/your-actual-script-id/exec";
   ```

## Important Notes
- Make sure your Google account has enough permission to create and modify Google Sheets
- Keep your script URL private as anyone with this URL can send data to your sheet
- Test the form to ensure data is being recorded correctly
