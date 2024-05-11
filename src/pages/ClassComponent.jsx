import React from 'react';
import BaseHoc from '../hoc/BaseHoc';

class ClassComponent extends React.Component {
    Name;
    age;
    constructor(){
        super();
        this.state ={
            name: "Soniya",
            age: "23",
        }
        console.log("Constructor...");
    }
    
    componentDidMount(){
        console.log("Component Did Mount");
    }

    componentDidUpdate(){
        console.log("Component Did Update");
        console.log(this.state.age);
    }

    render () {
        console.log("Render...");
        return <div>
            <p>This is a Class Component.</p>
            <button onClick={() => this.setState({ 
                age : this.state.age++,
                ...this.state}
            )}>Click me to add 1</button>
            <h1>{this.state.age}</h1>
        </div>
    }
}

export default BaseHoc(ClassComponent);