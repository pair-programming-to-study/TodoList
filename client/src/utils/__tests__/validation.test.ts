import {
  checkEmailRegex,
  checkPasswordAndPasswordConfirm,
  checkPasswordLength,
} from 'utils/validation';

describe('회원가입의 유효성을 검사하는 테스트입니다.', () => {
  describe('이메일의 정규식을 테스트합니다', () => {
    test('이메일의 단어만 들어왔을 경우를 테스트합니다.', () => {
      expect(checkEmailRegex('leejha')).toBe(false);
    });
    test('이메일의 단어와 @만 들어왔을 경우를 테스트합니다.', () => {
      expect(checkEmailRegex('leejha@')).toBe(false);
    });
    test('이메일의 올바른 형식이 들어왔을 경우를 테스트합니다.', () => {
      expect(checkEmailRegex('jhl2619@naver.com')).toBe(true);
    });
  });

  describe('비밀번호의 유효성을 테스트합니다', () => {
    test('비밀번호가 8자리 이상일 경우를 테스트합니다.', () => {
      expect(checkPasswordLength('12345678')).toBe(true);
    });
    test('비밀번호가 8자리 이하일 경우를 테스트합니다.', () => {
      expect(checkPasswordLength('1234567')).toBe(false);
    });
    test('비밀번호와 비밀번호 확인이 다른 경우를 테스트합니다.', () => {
      expect(checkPasswordAndPasswordConfirm('12345678', '1234567')).toBe(
        false
      );
    });
    test('비밀번호와 비밀번호 확인이 같은 경우를 테스트합니다', () => {
      expect(checkPasswordAndPasswordConfirm('12345678', '12345678')).toBe(
        true
      );
    });
  });
});
