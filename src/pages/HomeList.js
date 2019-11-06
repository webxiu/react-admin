import React, { useEffect } from 'react'

function HomeList() {
    useEffect(()=>{
        console.log("HomeList组件");
        return()=>{
            console.log('列表卸载');
        }
        
    },[])
    return (
        <div>
            <h1>HomeList组件</h1>
        </div>
    )
}

export default HomeList
