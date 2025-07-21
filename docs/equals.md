# Equalities 만들기

## shallowEquals

```ts
// shallowEquals 함수는 두 값의 얕은 비교를 수행합니다.
export function shallowEquals(objA: any, objB: any): boolean {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  // 3. 객체의 키 개수가 다른 경우 처리
  // 4. 모든 키에 대해 얕은 비교 수행

  // 이 부분을 적절히 수정하세요.
  return objA === objB;
}
```

#### 고민한 내용

```ts
// 1. 두 값이 정확히 같나요?
if (a === b) return true;

// 두 값이 유효한 값인가요?
if (a === null || b === null || a === undefined || b === undefined) return false;
```

처음에 해당 코드를 추가하여 둘 중에 한 값이 null이나 undefined일 경우의 예외처리를 추가해야한다고 생각했다. 하지만 생각해보니 이미 첫 조건문에서 두 값이 같은지 확인하고 있기 때문에 nullable한 값을 중복으로 체크하지 않아도 되어 불필요한 코드를 삭제하였다.

## deepEquals

```ts
// deepEquals 함수는 두 값의 깊은 비교를 수행합니다.
export function deepEquals(objA: any, objB: any): boolean {
  // 1. 기본 타입이거나 null인 경우 처리

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  //    - 객체의 키 개수가 다른 경우 처리
  //    - 재귀적으로 각 속성에 대해 deepEquals 호출

  // 이 부분을 적절히 수정하세요.
  return objA === objB;
}
```
