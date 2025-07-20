# HoC (High Order Component) 만들기

## memo

```ts
import { shallowEquals } from "../equalities";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(Component: ComponentType<P>, equals = shallowEquals) {
  // 1. 이전 props를 저장할 ref 생성

  // 2. 메모이제이션된 컴포넌트 생성

  // 3. equals 함수를 사용하여 props 비교

  // 4. props가 변경된 경우에만 새로운 렌더링 수행

  return Component;
}
```

## deepMemo

```ts
import { deepEquals } from "../equalities";
import { ComponentType } from "react";
import { memo } from "./memo.ts";

// deepMemo HOC는 컴포넌트의 props를 깊은 비교하여 불필요한 리렌더링을 방지합니다.
export function deepMemo<P extends object>(Component: FunctionComponent<P>) {
  // deepEquals 함수를 사용하여 props 비교
  // 앞에서 만든 memo를 사용
  return memo(Component, deepEquals);
}
```
