const currency = (num, fraction = 0) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fraction
  })

  return formatter.format(num)
}

export default currency
