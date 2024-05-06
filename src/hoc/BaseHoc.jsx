import React from 'react';

const BaseHoc = (Component) => ({...props}) => {
    return <div>
        <h1>Navbar</h1>
        <Component {...props}/>
        <h1>Footer</h1>
    </div>
}

export default BaseHoc;