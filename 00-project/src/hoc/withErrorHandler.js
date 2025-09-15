import { Component } from "react";
import Modal from "../components/UI/Modal/Modal";
import Wrapper from "./Wrapper";

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount = () => {
            axios.interceptors.request.use (req => {
                this.setState({error: null})
                return req;
            });
            axios.interceptors.response.use(res => {
                return res;
            }, error => {
                this.setState({error: error})
            });
        }

        errorConfirmedHandler = () => {
                this.setState({error: null})
        }

        render () {
            return (
                <Wrapper>
                    <Modal show={this.state.error}
                           modalClosed={this.errorConfirmedHandler}>
                            Something went wrong
                    </Modal>
                    <WrappedComponent {...this.props}></WrappedComponent>
                </Wrapper>
            )
        }
    }
}

export default WithErrorHandler;