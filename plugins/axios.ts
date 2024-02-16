import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "<https://whats-next.app>";

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
