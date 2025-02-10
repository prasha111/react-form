import React from 'react'

function Interests({data, setData}) {
    const {interest} = data;
    const updateData = (e, name)=>{
        
        console.log(e.target.value,name)
        setData((prev)=>({
            ...prev, 
            interest: e.target.checked ? [ e.target.name]: prev.interest.filter((pr)=>pr !== e.target.name)
        }))
    }
    console.log(data)
  return (
    <div>
        <header>
        Interest
        </header>
        <div>
        <input type='checkbox' name='music'  value={data.interest.includes('music')} onChange={(e)=>{updateData(e, "interest" )}}/>
        <label>
            music
        </label>
        </div>
      
    </div>
  )
}

export default Interests