import axios from "axios";

export const currency = () => {
  return axios.get("https://api.currencyapi.com/v3/latest", {
    headers: { apikey: "C8mNrQSuWFaMLndc6RJTySIMznBvz6H3g9OydaDv" },
    params: {
      base_currency: "BYN",
      currencies: "USD",
    },
  });
};
