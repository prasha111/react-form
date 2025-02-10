import React from 'react'

function Profile({data, setData}) {

    const updateValue = (e, name) =>{
        setData({...data, [name]:e.target.value})
    }
  return (
    <div>
        <div>
            <label>Name :</label>
            <input name='name' type='text' value={data.name} onChange={(e)=>{setData({...data, "name":e.target.value})}}/>
        </div>
        <div>
            <label>email :</label>
            <input value={data.email} type="text" onChange={(e)=>{updateValue(e, "email")}}/>
        </div>
    </div>
  )
}

export default Profile