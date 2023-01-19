import { Observer, useLocalStore, useObserver } from 'mobx-react';
import React from 'react';
import { store } from '../Store';

// 方法1
export function Demo1() {
  const localStore = useLocalStore(() => store);
  return useObserver(() => <div >{localStore.count}
    <button onClick={localStore.setCount}>添加</button>
  </div >)
}

// 方法2
export function Demo2() {
  const localStore = useLocalStore(() => store);
  return <Observer>{() => <span>{localStore.count}</span>}</Observer>
}
