import React, { useState } from 'react'
import Settings from './Settings.js'
import Profile from './Profile.js'
import Interests from './Interests.js'

const config = [{
    name:"settings",
    component:Settings,
},
{
    name:"profile",
    component:Profile,
    validate:(data)=>{
        let err = {};
        if(!data.name && data.name.length<2){
            err.name  = "name should be valid"
        }
        if(data.email.length<5 && !data.email.includes('@')){
            err.email  =  "email should be valid"
        }
        if(!data.age){
            err.age  = "age should be valid"
        }
        return err
    }
},
{
    name:"Interests",
    component:Interests
}
]

function Form() {
    const [data , setData] =  useState({
        "name":"djednejd",
        "age":23,
        "email":"rohit@gamil.com",
        "interest":["some"],
        "theme":"dark"
    })
    const [currentForm ,setCurrentForm] = useState(0)
    const ActiveForm = config[currentForm].component
    const submit = () =>{
    }
    
  return (
    <div className='app'>
        <div  className="span-head">
        {
    config.map((some, index)=>{
        return (
            <span onClick={()=>{setCurrentForm(index)}} className='span'>
                {some.name}
            </span>
        )
    })
}
        </div>


<div className='form'>


{
    <ActiveForm setData={setData} data={data} err={config[currentForm].validate}/>
}
</div>
<button onClick={submit} className='center'>
    Submit
</button>
    </div>
  )
}

export default Form