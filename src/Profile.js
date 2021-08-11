import React from 'react'

export default function Profile(prop) {
    //props methode
    function red(){
        alert(prop.text.name)
    }
    const name = ()=>{
        alert(prop.text.data)
    }
    return (
        <div>
            <h1 onClick={red}> {prop.text.name}</h1>
            <h2 onClick={name}>{prop.text.data}</h2>
            
        </div>
    )
}


