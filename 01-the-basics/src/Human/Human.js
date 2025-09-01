// It has to be simple ass possible, a function what is returning JSX
const human = (props) => {
    return <div>
                <p onClick={props.click}>This human is called {props.name} with age of {props.age}</p>
                <div>
                    {props.children}
                </div>
                <input type="text" onChange={props.change} value={props.name}/>
            </div>
};

export default human;