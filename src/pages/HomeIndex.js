import React, { useState ,useEffect,createContext ,useContext } from 'react'
import Child from './Child';
const CountContext = createContext()
function HomeIndex() {
    const [count,setCount] = useState(5)
    
    useEffect(()=>{
        console.log("HomeIndex组件",count);
        return()=>{
            console.log('首页卸载',count);
        }
        
    },[])
    return (
        <div>
            <h1>HomeIndex组件-----{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>累加</button>
            <CountContext.Provider value={count}>
                <Child />
            </CountContext.Provider>
        </div>
    )
}



export default HomeIndex
