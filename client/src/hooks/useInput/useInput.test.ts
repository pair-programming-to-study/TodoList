import { act, renderHook } from '@testing-library/react';
import React from 'react';
import useInput from './useInput';

describe('useInput을 테스트합니다.', () => {
  test('useInput은 3개의 값을 반환합니다.', () => {
    const { result } = renderHook(() => useInput(''));
    const [value, onChange, setValue] = result.current;
    expect(value).toBe('');
    expect(onChange).toBeInstanceOf(Function);
    expect(setValue).toBeInstanceOf(Function);
  });

  test('useInput의 초깃값을 설정할 수 있습니다.', () => {
    const { result } = renderHook(() => useInput('leejha'));
    expect(result.current[0]).toBe('leejha');
  });

  test('onChange로 value값을 바꿀 수 있습니다.', () => {
    const { result } = renderHook(() => useInput(''));
    expect(result.current[0]).toBe('');

    act(() => {
      result.current[1]({
        target: {
          value: 'leejha97',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current[0]).toBe('leejha97');
  });

  test('setValue로 value값을 바꿀 수 있습니다.', () => {
    const { result } = renderHook(() => useInput(''));
    expect(result.current[0]).toBe('');
    act(() => {
      result.current[2]('leejha97');
    });
    expect(result.current[0]).toBe('leejha97');
  });
});
