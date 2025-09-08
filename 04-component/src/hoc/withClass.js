import { Component } from "react";

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}></WrappedComponent>
//         </div>
//     )
// }

const withClass = (WrappedComponent, className) => {
    return class extends Component {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props}></WrappedComponent>
                </div>
            )
        }
    }
}

export default withClass;