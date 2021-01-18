export default {
  unitSign (unitName) {
    let sign = ''
    switch (unitName) {
      case 'квм': {
        sign = ' м²'
        break
      }
      case 'мкуб': {
        sign = ' м³'
        break
      }
      default: {
        sign = 'знак не определен'
        break
      }
    }
    return sign
  }
}
