const API_BASE_URL = import.meta.env.VITE_SLEEK_HARDCORE_BASE_URL_FOR_REQUEST;

let headers = new Headers();
headers.append("Content-Type", "application/json");

const requests = {
  get: async (url, body) => {
    const options = {
      method: "GET",
      headers: headers,
    };

    return fetch(`${API_BASE_URL}${url}`, options).then((response) =>
      response.json()
    );
  },

  post: async (url, body) => {
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    return fetch(`${API_BASE_URL}${url}`, options).then((response) =>
      response.json()
    );
  },

  put: async (url, body) => {
    const options = {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    };

    return fetch(`${API_BASE_URL}${url}`, options).then((response) =>
      response.json()
    );
  },

  delete: async (url) => {
    const options = {
      method: "DELETE",
      headers: headers,
    };

    return fetch(`${API_BASE_URL}${url}`, options).then((response) =>
      response.json()
    );
  },
};

export default requests;
