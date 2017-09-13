const Stars = (stars, total = 5) => {
  const Full = Math.round(stars) // 4
  const Empty = total - Full // 1

  const FullArr = [...Array(Full)].map(e => {
    return {
      full: true
    }
  })

  const EmptyArr = [...Array(Empty)].map(e => {
    return {
      full: false
    }
  })

  const StarsArr = [...FullArr, ...EmptyArr]

  return StarsArr
}

export default Stars
