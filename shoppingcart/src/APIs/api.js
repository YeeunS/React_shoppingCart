const URL = "http://localhost:3000";

export const getCart = () => {
  return fetch(`${URL}/cart`).then((res) => res.json());
};

export const getInventory = () => {
  return fetch(`${URL}/inventory`).then((res) => res.json());
};

export const addToCart = (inventoryItem) => {
  return fetch(`${URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inventoryItem),
  }).then((res) => res.json());
};

export const updateCart = (id, newAmount) => {
  return fetch(`${URL}/cart/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAmount),
  }).then((res) => res.json());
};

export const deleteFromCart = (id) => {
  return fetch(`${URL}/cart/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

export const checkout = () => {
  return getCart().then((data) =>
    Promise.all(data.map((item) => deleteFromCart(item.id)))
  );
};
