const joinWithConj = (array, conj = 'and') => {
  // Ensure input is valid.
  if (array === undefined) throw new Error('Missing argument - first argument should be an array')
  if (!Array.isArray(array)) throw new Error('Incorrect argument - first argument should be an array')
  if (array.length === 0) throw new Error('Incorrect argument - Array was empty')
  if (typeof conj !== 'string') throw new Error('Incorrect argument - second argument should be a string')

  // Don't append conjunction if only one element.
  if (array.length === 1) {
    return array[0]
  }

  return `${array.slice(0, -1).join(', ')} ${conj} ${array.slice(-1)}`;
}

module.exports = {
  joinWithConj,
}
