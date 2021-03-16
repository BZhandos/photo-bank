import request from './requests'

const ClientID = '442d6868b0058da84ce682f0d4dbf12958745f40c4e763ce22776a12115fefee'

export default {
  searchImageUnsplash: async function (
    query, page
  ) {
    try {
      const curQuery = {
        query: query,
        per_page: 10,
        page: page
      }
      let response = await request.getRequest(
        `https://api.unsplash.com/search/photos/?client_id=${ClientID}`,
        curQuery
      )
      return { success: true, data: response }
    } catch (e) {
      return { success: false, data: {} }
    }
  }
}
