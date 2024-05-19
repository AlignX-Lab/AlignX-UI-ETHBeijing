import { API_BASE_URL } from './url';

const request = (options) => {
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*'
  });

  const defaults = { headers: headers, credentials: "include" };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options)
    .then(response => response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    );
};

const concatGetParams = ({ relativePath, params = {} }) => {
  let result = "";
  let item;
  for (item in params) {
    if (params[item] && String(params[item])) {
      result += `&${item}=${params[item]}`;
    }
  }
  return `${API_BASE_URL}${relativePath}?${result.slice(1)}`;
}

// start region: APIs
// For example
export function GetProducts({ name, province, merchant, merchantId, category, page = 1, size = 10 }) {
  return request({
    url: concatGetParams({ relativePath: '/products', params: { name, province, merchant, merchantId, category, page, size } }),
    method: 'GET',
  });
}

// end region