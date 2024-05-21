const baseURL = "http://localhost:3000";

// API functions
export const getInventory = () => {
  return fetch(`${baseURL}/inventory`).then((res) => res.json());
};

export const getCart = () => {
  return fetch(`${baseURL}/cart`).then((res) => res.json());
};

export const updateCart = (cart) => {
  return fetch(`${baseURL}/cart`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  }).then((res) => res.json());
};
