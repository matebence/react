import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function withRouter(Component) {
  return function WrappedComponent(props) {
    const params = useParams();
    const navigate = useNavigate();
    return <Component {...props} params={params} navigate={navigate} />;
  };
}