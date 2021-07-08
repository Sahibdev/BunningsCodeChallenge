export const merger = (jsonA, jsonB) => {
  const mergedArray = [...jsonA, ...jsonB];
  // mergedArray have duplicates, lets remove the duplicates using Set
  let set = new Set();
  const jsonArray = mergedArray.filter(item => {
    if (!set.has(`${item.barcode}&${item.Identifier}`)) {
      set.add(`${item.barcode}&${item.Identifier}`);
      return true;
    }
    return false;
  }, set);
  filterJson(jsonArray);
};

function filterJson(jsonArray) {
  jsonArray.map(json => ({ SKU: json.SKU, productDetails: json.productDetails, company: json.company }));
}
