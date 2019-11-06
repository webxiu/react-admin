import React, { useState , createContext , useContext } from 'react';

export default function Child(props) {
    return (
        <div>
             <h2>子组件获取到的{props.value}</h2>
             <Counter></Counter>
        </div>
    )
}

function Counter(props){
    // const count = useContext(CountContext)  //一句话就可以得到count
    return (
    // <h2>333333{count}</h2>
    <h2>39999999999</h2>
    )
}
