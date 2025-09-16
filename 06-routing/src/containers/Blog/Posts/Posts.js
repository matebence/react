import { Component } from "react";
import Post from '../../../components/Post/Post'
import axios from 'axios';
import './Posts.css';
import { withRouter } from "../../../hoc/withRouter";
import { Outlet, Link } from 'react-router-dom';

class Posts extends Component {
    
    state = {
        posts: []
    }

    componentDidMount = () => {
        console.log(this.props); // here we can see our nav options from reac-router

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Ecneb'
                    }
                })
                this.setState({posts: updatedPosts})
            })
            .catch(error => {
                console.log(error)
                this.setState({error: true});
            });
        
    }

    postSelectedHandler = (id) => {
        // Navigating Programmatically, it can be also used for redirecting
        const { navigate } = this.props;
        navigate('/' + id);
    }

    render() {
        let posts = <p>Something whent wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                // Navigating via Link NavLink
                <Link to={'/'+post.id} key={post.id}>
                    <Post 
                    title={post.title}
                    author={post.author}></Post>
                </Link>
                // <Post 
                //     key={post.id}
                //     title={post.title}
                //     author={post.author}
                //     clicked={() =>this.postSelectedHandler(post.id)}></Post>
                )
            });
        }
        return (
            <div>
                {/* Render nested routes here */}
                    <Outlet />
                <section className="Posts">
                    {posts}
                 </section>
            </div>
        ) 
    }
}

export default withRouter(Posts);