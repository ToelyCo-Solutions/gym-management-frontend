const API_BASE_URL = "http://localhost:5055";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const requests = {
  get: (url, body) => {
    const options = {
      method: "GET",
      headers: headers,
    };

    return fetch(`${API_BASE_URL}${url}`, options)
      .then((response) => response.json())
      .then((data) => data);
  },

  post: (url, body, headers) => {
    const options = {
      method: "POST",
      headers: { ...headers, ...headers },
      body: JSON.stringify(body),
    };

    return fetch(`${API_BASE_URL}${url}`, options)
      .then((response) => response.json())
      .then((data) => data);
  },

  put: (url, body) => {
    const options = {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    };

    return fetch(`${API_BASE_URL}${url}`, options)
      .then((response) => response.json())
      .then((data) => data);
  },
};

export default requests;
