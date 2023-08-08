import React from 'react'



function Show(props) {
    const fruit = props.fruit
return (
    <div>
        <h1>Show Page</h1>
        <h3> The {fruit.name} is {fruit.color}</h3>
        <h1>{fruit.readyToEat ? " Its Ready to Eat":"It Isnt Ready Yet"}</h1>
        </div>
)
}

export default Show
