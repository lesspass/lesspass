import { isEmpty } from "lodash";
import Fuse from "fuse.js";

export function returnMatchingData(query, data, dataKey) {
  if (isEmpty(query)) return [];
  const options = {
    keys: [dataKey],
    minMatchCharLength: 2,
    includeMatches: true
  };
  const fuse = new Fuse(data, options);
  return fuse.search(query).slice(0, 3);
}
