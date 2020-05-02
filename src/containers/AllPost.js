import React, { Component } from 'react';
import { connect } from 'react-redux'
import Post from '../components/Post'
import EditPost from './EditPost'

class AllPost extends Component {
  render() {
    return (
      <div>
        <h1 className="post_heading">All Posts</h1>.
        {/* {console.log(this.props.posts.postReducer[0])} */}
        {this.props.posts.postReducer.map((post) => (
          <div key={post.id}>
            {post.editing ? <EditPost key={post.id} post={post} /> :
              <Post key={post.id} post={post} />}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(AllPost);