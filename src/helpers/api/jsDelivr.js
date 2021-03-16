import request from './requests'

export default {
  searchInJsDelivr: async function (
    query, page
  ) {
    try {
      let curQuery = {
        text: query,
        limit: 10,
        page: page
      }
      let response = await request.getRequest(
        'https://data.jsdelivr.com/v1/serach/',
        curQuery
      )
      return { success: true, data: response.data }
    } catch (e) {
      return { success: false, data: {} }
    }
  }
}
