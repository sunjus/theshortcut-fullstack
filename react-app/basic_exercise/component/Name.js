import React, { useState } from 'react'

//Exercise React Hook : useState, props, 

const Name = (props) => {
    const [name, setName] = useState('Jane');
    console.log(props)
    console.log(props.age)
    
    const [age, setAge] = useState(props.age)
    
    return (
        <div>
            <p>{name}({age})</p>
            <button onClick={()=>{
                setName(name === 'Jane' ? 'Mike' : 'Jane')
            }}>Change Name</button>
            <button onClick={()=>{
                setAge(age+1)
            }}>Change age</button>
        </div>
    )
}

export default Name
