require("dotenv").config();

export default {
  apiKey: process.env.SHEETS_API,
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: process.env.SPREADSHEETS_ID
};
