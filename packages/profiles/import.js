const Typesense = require("typesense");

const profiles = require("./profiles.json");

const client = new Typesense.Client({
  masterNode: {
    host: "localhost",
    port: "8108",
    protocol: "http",
    apiKey: "dev-api-key"
  },
  timeoutSeconds: 2
});

client
  .collections("profiles")
  .delete()
  .catch(() => {});

client.collections().create({
  name: "profiles",
  fields: [
    { name: "site", type: "string" },
    { name: "profile", type: "string" },
    { name: "usage_count", type: "int32" },
    { name: "favicon", type: "string" }
  ],
  default_sorting_field: "usage_count"
});

for (let i = 0; i < profiles.length; i += 1) {
  const profile = profiles[i];
  client
    .collections("profiles")
    .documents()
    .create(profile);
}
