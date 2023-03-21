import React from "react";

const Greet = ({name, heroName}) =>{
    // console.log(props);
    return(
        <div>
            <h1>
                My name is: {name} and here name is : {heroName}
            </h1>
        </div>
    )
}

export default Greet