import request from './requests'

const AUTH = 'Token 575a636bb682ece218f701ab62197f1916f63baa'

export default {
  searchInDaData: async function (
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
      let list = []
      response.suggestions.forEach(suggestions => {
        let curItem = {}
        curItem.value = suggestions.value
        curItem.name = suggestions.data.name.short
        curItem.status = suggestions.data.state.status
        list.push(curItem)
      })
      return { success: true, data: list }
    } catch (e) {
      return { success: false, data: {} }
    }
  }
}
