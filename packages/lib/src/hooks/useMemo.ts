import { type DependencyList } from "react";
import { shallowEquals } from "../equals";
import { useRef } from "./useRef";

export function useMemo<T>(factory: () => T, _deps: DependencyList, _equals = shallowEquals): T {
  const memoRef = useRef<T | null>(null);
  const depsRef = useRef<DependencyList>([]);

  if (!_equals(depsRef.current, _deps) || memoRef.current === null) {
    // deps가 변경되었거나 memoRef가 초기화된 경우
    memoRef.current = factory();
    depsRef.current = _deps;
  }

  return memoRef.current;
}
