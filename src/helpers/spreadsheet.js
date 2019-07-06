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
            data
              .map(muchacho => ({
                username: muchacho[0],
                name: muchacho[1],
                birthDate: muchacho[2],
                photo: muchacho[3],
                quote: muchacho[4]
              }))
              .slice(1) || [];
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
