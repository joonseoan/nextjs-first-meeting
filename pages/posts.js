import React from 'react';

import { getPosts } from '../actions/movies';

class Posts extends React.Component {

    static async getInitialProps() {
        const posts = await getPosts();
        return { posts }
    }

    render() {
        return (
            <div className="container">
                <h1>I am post page.</h1>
                <ul>
                {
                    this.props.posts.map(post => (
                        <li key={post.id }>
                            <span>{ post.id }</span>
                            <span>{ post.title }</span>
                        </li>
                    ))
                }
                </ul>    
            </div>
        );
    }
}

export default Posts;