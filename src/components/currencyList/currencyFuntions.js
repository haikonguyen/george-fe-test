export const getFlag = (currency) => {
  return `https://www.countryflags.io/${currency.substr(0, 2)}/flat/64.png`;
};
