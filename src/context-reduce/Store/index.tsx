import React, { createContext, useReducer } from 'react';
// 创建全局数据
export const Store:any = createContext({});

// 获取数据
export function useStore(): any {
    return React.useContext(Store);
}

// 结合reduce增加操作类
export const StoreProvider = ({ children, initialState, reducer }: any) => {
    const [globalState, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={ [globalState, dispatch] }> { children } </Store.Provider>;
};
