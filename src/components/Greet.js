import React from "react";

const Greet = props =>{
    console.log(props);
    return(
        <div>
            <h1>
                Hello world {props.name}
            </h1>
        </div>
    )
}

export default Greet