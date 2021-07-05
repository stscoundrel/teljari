import { joinWithConj } from '../index';

describe('Teljari arguments', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      joinWithConj();
    }).toThrow('Missing argument - first argument should be an array');
  });

  test('Throws error on incorrect first argument', () => {
    expect(() => {
      joinWithConj('totally not an array');
    }).toThrow('Incorrect argument - first argument should be an array');
  });

  test('Throws error on empty array as first argument', () => {
    expect(() => {
      joinWithConj([]);
    }).toThrow('Incorrect argument - Array was empty');
  });

  test('Throws error on incorrect second argument', () => {
    expect(() => {
      joinWithConj([1, 2, 3], []);
    }).toThrow('Incorrect argument - second argument should be a string');
  });
});

describe('Teljari output', () => {
  test('Output is correct with array of one item', () => {
    const input = ['Chasm City'];
    const result = joinWithConj(input);

    expect(result).toBe('Chasm City');
  });

  test('Output is correct with default argument', () => {
    const input = ['Revelation Space', 'Redemption Arc', 'Absolution Gap'];
    const result = joinWithConj(input);

    expect(result).toBe('Revelation Space, Redemption Arc and Absolution Gap');
  });

  test('Output is correct with given conjuntion argument', () => {
    const input = ['Blue Remembered Earth', 'On The Steel Breeze', 'Poseidons Wake'];
    const result = joinWithConj(input, 'or maybe even');

    expect(result).toBe('Blue Remembered Earth, On The Steel Breeze or maybe even Poseidons Wake');
  });
});
