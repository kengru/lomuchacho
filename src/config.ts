require("dotenv").config();

export default {
  apiKey: process.env.REACT_APP_SHEETS_API,
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: process.env.REACT_APP_SPREADSHEETS_ID
};
