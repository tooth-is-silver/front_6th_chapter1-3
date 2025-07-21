/**
 * 두 값이 얕은 비교를 수행합니다.
 * shallow : 얕은
 * equal : 동일하다
 * @param a 비교할 첫 번째 값
 * @param b 비교할 두 번째 값
 * @returns 두 값이 같은지 얕은 비교를 수행한 결과
 */
export const shallowEquals = (a: unknown, b: unknown) => {
  // 1. 두 값이 정확히 같나요?
  if (a === b) return true;

  // 예외 처리 추가 : 두 값이 유효한 값인가요?
  if (a === null || b === null || a === undefined || b === undefined) return false;

  // 예외 처리 추가 : 두 값이 배열인가요?
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  // 2. 둘 다 객체인가요?
  if (typeof a !== "object" || typeof b !== "object") return false;

  // 둘 다 객체네요.
  // 3. 그럼 객체의 키 개수가 같은가요?
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  // 4. 모든 키가 같은가요?
  for (const key of aKeys) {
    if (a[key as keyof typeof a] !== b[key as keyof typeof b]) return false;
  }

  return true;
};
