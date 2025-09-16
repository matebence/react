import React, { Component } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {

    state = {
        auth: false
    }

    // We can also use this as our auth
    componentDidMount() {

    }

    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            {this.state.auth ?
                            <li>    
                                <NavLink to="/new-post">New Post</NavLink>
                            </li>
                            :
                            <li>
                            </li>
                            }
                        </ul>
                    </nav>
                </header>
                <Routes>
                    {/* <Route path="/" element={<h1>Home</h1>} /> */}
                    {/* <Route path="/:id" element={<FullPost/>} /> */}
                    <Route path="/" element={<Posts/>} >
                        <Route path="/:id" element={<FullPost/>} />
                    </Route>
                    {this.state.auth ? <Route path="/new-post" element={<NewPost/>}/> : null}
                    <Route path="*" element={<h1>404 Not Found</h1>} />                    
                </Routes>

                {/* <Navigate from="/" to="/new-post" /> */}
            </div>
        );
    }
}

export default Blog;