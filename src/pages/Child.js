import React, { useState , createContext , useContext } from 'react';
import { CountContext,Counter } from './reducer';

export default function Child(props) {
    const count = useContext(CountContext)  //一句话就可以得到count
    return (
        <div>
             <h2>子组件获取到的: {count}</h2>
             <Counter></Counter>
        </div>
    )
}


