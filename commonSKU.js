export const getCommonSKU = (companyA, companyB) => {
  let set = new Set();
  companyA.map((barcodeA) => {
    companyB.find((barcodeB) => {
      if (barcodeB?.Barcode && barcodeB?.Barcode === barcodeA?.Barcode) {
        set.add(barcodeB?.SKU);
        return true;
      } else return false;
    });
  });
  return set;
};
