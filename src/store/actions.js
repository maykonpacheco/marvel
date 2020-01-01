import { ROOT_URL } from "../services";

export const dataMain = comics => {
  return fetch(`${ROOT_URL}/data`, {
    method: "GET" 
  }).then(res => res.json());
};
