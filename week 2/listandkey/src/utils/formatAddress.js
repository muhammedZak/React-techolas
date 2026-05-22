// Format full address
export const formatAddress = (addr) => {
  const { street, suite, city, zipcode } = addr;
  return `${street}${suite ? `, ${suite}` : ''}, ${city} ${zipcode}`;
};
