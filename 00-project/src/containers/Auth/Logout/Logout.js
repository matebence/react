import { Component } from "react";
import * as actionTypes from "../../../store/actions/auth";
import { Navigate } from "react-router-dom";
import {connect} from "react-redux"
class Logout extends Component {

    componentDidMount () {
        this.props.onLogout();
    }

    render () {
        return (
            <Navigate to="/"></Navigate>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actionTypes.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);