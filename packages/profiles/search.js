const axios = require("axios");

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("enter a query for the search");
  process.exit();
}

axios
  .request({
    method: "get",
    url: "/collections/profiles/documents/search",
    baseURL: "http://localhost:8108/",
    headers: { "X-TYPESENSE-API-KEY": "dev-search-only-api-key" },
    params: {
      q: args[0],
      query_by: "site"
    }
  })
  .then(response => console.log(JSON.stringify(response.data, null, 2)))
  .catch(error => console.log(error));
