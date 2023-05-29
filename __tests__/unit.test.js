// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');


test('valid isPhoneNumber', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
  });

  test('invalid isPhoneNumber', () => {
    expect(functions.isPhoneNumber('123456')).toBe(false);
    expect(functions.isPhoneNumber('0000-0000-0000')).toBe(false);
  });

  test('valid isEmail', () => {
    expect(functions.isEmail('test@test.com')).toBe(true);
    expect(functions.isEmail('test2@domain.org')).toBe(true);
  });

  test('invalid isEmail', () => {
    expect(functions.isEmail('test@.com')).toBe(false);
    expect(functions.isEmail('test2domain.com')).toBe(false);
  });

  test('valid isStrongPassword', () => {
    expect(functions.isStrongPassword('Password123')).toBe(true);
    expect(functions.isStrongPassword('AnotherPassword')).toBe(true);
  });

  test('invalid isStrongPassword', () => {
    expect(functions.isStrongPassword('123456')).toBe(false);
    expect(functions.isStrongPassword('short')).toBe(false);
  });

  test('valid isDate', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
    expect(functions.isDate('04/05/2003')).toBe(true);
  });

  test('invalid isDate', () => {
    expect(functions.isDate('2023/05/28')).toBe(false);
    expect(functions.isDate('05-28-2023')).toBe(false);
  });

  test('valid isHexColor', () => {
    expect(functions.isHexColor('#aaaaaa')).toBe(true);
    expect(functions.isHexColor('#000000')).toBe(true);
  });

  test('invalid isHexColor', () => {
    expect(functions.isHexColor('aaaaaa')).toBe(false);
    expect(functions.isHexColor('#gggggg')).toBe(false);
  });