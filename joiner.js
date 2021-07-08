export const megalist = (jsonA, jsonB, jsonC, company) => {
  return jsonA.map(product => {
    const sourcename = jsonB.find(source => source.source === product.source);
    const barcode = jsonC.find(barcode => barcode.SKU === jsonA.SKU);
    return { ...product, sourcename: sourcename?.name, barcode: barcode?.barcode, company };
  });
};
