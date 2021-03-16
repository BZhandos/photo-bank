import axios from 'axios'

function postRequest (
  url,
  data,
  headers = {},
  type = 'application/json;charset=UTF-8',
  responseType = 'text'
) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        responseType,
        headers: {
          'Content-type': type,
          ...headers
        }
      })
      .then(response => {
        if (response.status === 200) {
          resolve(response.data)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

function getRequest (
  url,
  data,
  headers = {},
  type = 'application/json;charset=UTF-8',
  responseType = 'text'
) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: {
          ...data
        },
        responseType,
        headers: {
          'Content-type': type,
          ...headers
        }
      })
      .then(response => {
        if (response.status === 200) {
          resolve(response.data)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  postRequest,
  getRequest
}
