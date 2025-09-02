const person = (props) => {
    return (
        <div>
                <p onClick={props.click}>This person is called {props.name} with age of {props.age}</p>
                <div>
                    {props.children}
                </div>
                <input type="text" onChange={props.change} value={props.name}/>
            </div>
    )
}
export default person;