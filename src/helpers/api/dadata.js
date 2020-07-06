import request from './requests'

const AUTH = 'Token 575a636bb682ece218f701ab62197f1916f63baa'

export default {
  ownTransfer: async function (
    query
  ) {
    try {
      let curQuery = {
        query: query
      }
      let response = await request.postRequest(
        'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party/',
        curQuery,
        {
          Authorization: AUTH
        }
      )
      return { success: true, data: response.suggestions }
    } catch (e) {
      return { success: false, data: {} }
    }
  }
}
