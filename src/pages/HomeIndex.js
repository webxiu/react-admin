import React, { useState, useEffect, createContext, useContext } from 'react'
import Child from './Child';
import { CountContext } from './reducer';
function HomeIndex() {
    const [count, setCount] = useState(5)

    useEffect(() => {
        console.log("HomeIndex组件", count);
        return () => {
            console.log('首页卸载', count);
        }

    }, [])
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>累加</button>
            <h1>HomeIndex组件-----{count}</h1>
            <CountContext.Provider value={count}>
                <Child />
            </CountContext.Provider>
        </div>
    )
}



export default HomeIndex
