const joinWithConj = (array, conj = 'and') => {
  if (array === undefined) throw new Error('Missing argument - first argument should be an array')
  if (!Array.isArray(array)) throw new Error('Incorrect argument - first argument should be an array')
  if (array.length === 0) throw new Error('Incorrect argument - Array was empty')
  if (typeof conj !== 'string') throw new Error('Incorrect argument - second argument should be a string')
}

module.exports = {
  joinWithConj,
}
