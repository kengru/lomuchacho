import config from "../config";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "IP!A1:T20"
      })
      .then(
        response => {
          const data = response.result.values;
          const muchachos =
            data.map(muchacho => ({
              name: muchacho[0],
              birthday: muchacho[1]
            })) || [];
          callback({
            muchachos
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
