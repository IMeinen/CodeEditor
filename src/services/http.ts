import axios from "axios";

const get = (path: string) => {
  const xhr = axios({
    method: "GET",
    url: `https://my-json-server.typicode.com/open-veezoo/editor/${path}`,
  })
    .then((res) => res.data)
    .catch((error) => error);

  return xhr;
};

const put = (path: string, payload: unknown) => {
  const xhr = axios({
    method: "PUT",
    url: `https://my-json-server.typicode.com/open-veezoo/editor/${path}`,
    data: payload,
  })
    .then((res) => res.data)
    .catch((error) => error);

  return xhr;
};

const del = async (path: string) => {
  const xhr = await axios({
    method: "DELETE",
    url: `https://my-json-server.typicode.com/open-veezoo/editor/${path}`,
  })
    .then((res) => res.data)
    .catch((error) => error);

  return xhr;
};

export { get, put, del };
