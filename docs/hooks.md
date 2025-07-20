# Hooks 만들기

## useRef

```ts
// useRef 훅은 렌더링 사이에 값을 유지하는 가변 ref 객체를 생성합니다.
export function useRef<T>(initialValue: T): { current: T } {
  // 이 부분을 적절히 수정하세요. useRef를 구현하지 않으면 다른 hook을 구현할 수 없습니다.
  return { current: initialValue };
}
```

## useMemo

```ts
import { DependencyList } from "react";
import { useRef } from "./useRef";

// useMemo 훅은 계산 비용이 높은 값을 메모이제이션합니다.
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  // 직접 작성한 useRef를 통해서 만들어보세요! 이게 제일 중요합니다.

  // 1. 이전 의존성과 결과를 저장할 ref 생성

  // 2. 현재 의존성과 이전 의존성 비교

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장

  // 4. 메모이제이션된 값 반환

  // 구현을 완성해주세요.
  return factory(); // 이 부분을 적절히 수정하세요.
}
```

## useDeepMemo

```ts
import { DependencyList } from "react";
import { useMemo } from "./useMemo";
import { deepEquals } from "../equalities";

// useDeepMemo 훅은 깊은 비교를 사용하여 값을 메모이제이션합니다.
export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // 1. useMemo를 사용하되, 비교 함수로 deepEquals를 사용
  return useMemo(factory, deps, deepEquals);
}
```

## useCallback

```ts
import { DependencyList } from "react";

export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
  // 직접 작성한 useMemo를 통해서 만들어보세요.
  return ((...args) => factory(...args)) as T;
}
```

## useShallowState

```ts
import { useState } from "react";
import { shallowEquals } from "../equals";

export const useShallowState = <T>(initialValue: Parameters<typeof useState<T>>[0]) => {
  // useState를 사용하여 상태를 관리하고, shallowEquals를 사용하여 상태 변경을 감지하는 훅을 구현합니다.
  return useState(initialValue);
};
```

## useAutoCallback

```ts
import type { AnyFunction } from "../types";
import { useCallback } from "./useCallback";
import { useRef } from "./useRef";

// useCallback과 useRef를 이용하여 useAutoCallback
export const useAutoCallback = <T extends AnyFunction>(fn: T): T => {
  return fn;
};
```
