import dadataAPI from './api/dadata'
import jsDelivr from './api/jsDelivr'
import unsplash from './api/unsplash'

let API = {
  ...dadataAPI,
  ...jsDelivr,
  ...unsplash
}

export default API
