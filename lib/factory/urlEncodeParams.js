const urlEncodeParams = (data) => {
	return Object.keys(data).map(function (k) {
      let values = ''

      if (typeof data[k] === 'object') {
        values = Object.keys(data[k]).map(function (key) {
          return data[k][key]
        }).join(',')
      } else {
        values = encodeURIComponent(data[k])
      }

      return encodeURIComponent(k) + '=' + values
    }).join('&')
}

export default urlEncodeParams