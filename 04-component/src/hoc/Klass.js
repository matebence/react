import React from 'react';

const Klass = (props) => {
    return (<div className={props.classes}>
        {props.children}
    </div>);
};

export default Klass;