import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Blog from '../blog.png'
import { connect } from 'react-redux'
import { setId } from '../redux/actions'

class Home extends Component {
  componentDidUpdate() {
    console.log('hi');
  }
  render() {
    const posts = this.props.posts;
    console.log(posts);

    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div onClick={() => this.props.setId(post.id)} className="post card" key={post.id}>
            <img src={Blog} alt="A Blog" />
            <div className="card-content">
              <Link to={'/' + post.id} >
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setId: (e) => dispatch(setId(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

