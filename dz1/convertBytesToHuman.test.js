/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('1000')).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(0.5)).toBe('0.5 B')
  expect(convertBytesToHuman(0.25)).toBe('0.25 B')
  expect(convertBytesToHuman(5)).toBe('5 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(9007199254740991)).toBe('8 PB')
  expect(convertBytesToHuman(0xff)).toBe('255 B')
  expect(convertBytesToHuman(90071992547409912345678908907907535)).toBe('74505805969.24 YB')
});

