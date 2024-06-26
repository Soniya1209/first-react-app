import React, {useState, useEffect, useRef} from 'react';
import BaseHoc from '../hoc/BaseHoc';


const FunctionalComponent = ({name, age, setName}) => {
    const [changeName, setChangeName] = useState("");
    const [count, setCount] = useState(0);
    const preRef = useRef();
    
    useEffect(() => {
        console.log("Component Did Mount");
    },[])

    useEffect(() => {
        console.log("Component Did Update");
    })

    useEffect(() => {
        console.log("Only name is updated");
    },[changeName])

    useEffect(() => {
        console.log(preRef.current.innerHtML == count);
    },[count])    

    return <div>

        <p>This ia a Functional Component.</p>
        <button onClick={() => setCount(count+1)}>Click me to add 1</button>
        <button onClick={() => setCount(count - 1)}>Click me to subtract 1</button>
        <h1 ref={preRef}>{count}</h1>
        <input onChange={(e) => setChangeName(e.target.value)}/>
        <button onClick={() => setName(changeName)}>Change name</button>
        <h1>My name is {name} . I am {age} years old.</h1>

    </div>
}

export default BaseHoc(FunctionalComponent);