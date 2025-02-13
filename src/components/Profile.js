import React from 'react'

function Profile({data, setData, err}) {

    const updateValue = (e, name) =>{
        setData({...data, [name]:e.target.value})
    }
  return (
    <div>
        <div>
            <label>Name :</label>
            <input name='name' type='text' value={data.name} onChange={(e)=>{setData({...data, "name":e.target.value})}}/>
            <error>
                {err.validate}
            </error>
        </div>
        <div>
            <label>email :</label>
            <input value={data.email} type="text" onChange={(e)=>{updateValue(e, "email")}}/>
        </div>
        <div>
            <label>age :</label>
            <input value={data.age} type="text" onChange={(e)=>{updateValue(e, "age")}}/>
        </div>
    </div>
  )
}

export default Profile