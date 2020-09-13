const { joinWithConj } = require('../index.js');

describe('Arguments', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      joinWithConj()
    }).toThrow('Missing argument - first argument should be an array')
  })

  test('Throws error on incorrect first argument', () => {
    expect(() => {
      joinWithConj('totally not an array')
    }).toThrow('Incorrect argument - first argument should be an array')
  })

  test('Throws error on empty array as first argument', () => {
    expect(() => {
      joinWithConj([])
    }).toThrow('Incorrect argument - Array was empty')
  })

  test('Throws error on incorrect second argument', () => {
    expect(() => {
      joinWithConj([1, 2, 3], [])
    }).toThrow('Incorrect argument - second argument should be a string')
  })
})
