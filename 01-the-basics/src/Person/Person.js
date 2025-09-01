// It has to be simple ass possible, a function what is returning JSX
import './Person.css'

const person = () => {
    return <div className="Person">
                <p>This is a person component</p>
                <p>We can use here js to {Math.random()* 30}</p>
            </div>
};

export default person;