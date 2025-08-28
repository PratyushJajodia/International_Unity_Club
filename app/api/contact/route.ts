import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const formData = await request.json() as FormData;
    console.log('Form data received on server:', formData);

    // Prepare credentials and Google Sheets API
    const credentialsPath = path.join(process.cwd(), process.env.GOOGLE_SHEETS_CREDENTIALS_PATH || '');
    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME;

    if (!spreadsheetId || !sheetName) {
      throw new Error('Google Sheet ID or Name not configured in environment variables.');
    }

    // Prepare the row data
    const timestamp = new Date().toISOString();
    const row = [[timestamp, formData.name, formData.email, formData.message]];

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetName, // Appends to the first empty row of the entire sheet
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: row,
      },
    });

    return NextResponse.json({ message: 'Form submitted successfully and saved to Google Sheet!', data: formData }, { status: 200 });

  } catch (error) {
    console.error('Error processing form submission or saving to Google Sheet:', error);
    let errorMessage = 'An unknown error occurred while processing your request.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    // Avoid exposing raw internal error messages to the client in production if they are too revealing
    const clientErrorMessage = (error instanceof Error && (error.message.includes('Sheet ID') || error.message.includes('credentials'))) 
                               ? "Server configuration error. Please contact support."
                               : "Error submitting form.";
    return NextResponse.json({ message: clientErrorMessage, errorDetail: errorMessage }, { status: 500 });
  }
} 