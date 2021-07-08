export const joinLists = (companyA, companyB, commonCatalog) => {
  const formatCompanyA = _format(companyA, 'A');
  const formatCompanyB = _format(companyB, 'B');

  return [
    ...formatCompanyA,
    ...formatCompanyB.filter((product) => !commonCatalog.has(product.SKU)),
  ];
};

function _format(companyData, tag) {
  return companyData.map((product) => {
    return { ...product, Source: tag };
  });
}
