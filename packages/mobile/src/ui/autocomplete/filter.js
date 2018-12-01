import { isEmpty } from "lodash";

export function returnMatchingData(query, data, dataKey) {
  if (isEmpty(query)) return [];
  const matchingData = [];
  for (let i = 0; i < data.length; i += 1) {
    const element = data[i];
    const dataValue = data[i][dataKey];
    if (
      dataValue &&
      dataValue.substr(0, query.length).toUpperCase() === query.toUpperCase()
    ) {
      matchingData.push({
        value: dataValue,
        element
      });
    }
  }
  return matchingData;
}
