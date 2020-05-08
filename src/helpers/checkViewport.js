function isInViewport (elem) {
  let view = elem.getBoundingClientRect()
  return (
    view.top < 100 &&
    view.bottom > 100
  )
}

export default {
  isInViewport
}
