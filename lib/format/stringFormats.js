const capitalize = (string) => {
  return string && (string[0].toUpperCase() + string.slice(1))
}

const uppercase = (string) => {
  return string && string.toUpperCase()
}

const cutString = (string, count) => {
  return string && (string.slice(0, count) + (string.length > count ? '...' : ''))
}

export {capitalize, cutString, uppercase}
