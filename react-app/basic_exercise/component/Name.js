import React, { useState } from 'react'
import UserName from './UserName';

//Exercise React Hook : useState, props, 

const Name = (props) => {
    const [name, setName] = useState('Jane');
    console.log(props)
    console.log(props.age)
    
    const [age, setAge] = useState(props.age)
    const msg = props.age > 19 ? "Adult" : "Minor";

    return (
        <div>
            <p>{name}({age})</p>
            <p>{msg}</p>
            <UserName name={name} />
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
