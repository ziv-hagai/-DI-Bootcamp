import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../redux/actions'
import { Link } from 'react-router-dom'

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.id);
        console.log('hi', this.props.id);
    }
    render() {
        const post = this.props.posts.find(item => item.id === this.props.id);
        console.log(post);
        return (

            <div className="container">
                <div className="post">
                    <h4 className="center">{post.title}</h4>
                    <p>{post.body}</p>
                    <div className="center">
                        <Link to={'/'}>
                            <button className="btn grey" onClick={this.handleClick}>
                                Delete Post
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

