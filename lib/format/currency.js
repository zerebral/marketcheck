/**
 * Format a number into currency value
 * @param {Number} num
 * @param {Number} fraction how many decimals to have. Default 0
 * @returns {String}
 */
const currency = (num, fraction = 0) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fraction
  })

  return formatter.format(num)
}

export default currency
