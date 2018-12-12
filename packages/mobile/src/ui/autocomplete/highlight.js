function highlightMatch(match, highlight, noHightlight) {
  let index = 0;
  let regionIndex = 0;
  let regions = [];
  match.indices.map(indice => {
    const firstRegion = match.value.substring(regionIndex, indice[0]);
    if (firstRegion) {
      regions.push(noHightlight(firstRegion, index));
      index += 1;
    }
    const highlightedRegion = match.value.substring(indice[0], indice[1] + 1);
    regions.push(highlight(highlightedRegion, index));
    index += 1;
    regionIndex = indice[1] + 1;
  });
  const lastRegion = match.value.substring(regionIndex);
  if (lastRegion) {
    regions.push(noHightlight(lastRegion, index));
  }
  return regions;
}

export function highlightSearch(data, highlight, noHightlight) {
  const result = [];
  data.map(d => {
    const matches = d.matches;
    if (matches.length > 0) {
      result.push({
        item: d.item,
        highlights: highlightMatch(matches[0], highlight, noHightlight)
      });
    }
  });
  return result;
}
