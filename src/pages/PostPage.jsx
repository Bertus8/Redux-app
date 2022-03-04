import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getPostById} from '../actions/postActions';
import {Post} from '../components/Post';


const PostPage = ({ errors, loading }) => {
  const [ post, setPost ] = useState ([]);


  useEffect(() => {

    getPostById().then((data)=>{
      setPost(data)
    })

  }, []);


  const showPost = () => {
    return <Post post={post} summary={false} />
  };

  return (
    <div className="container">
      {showPost()}
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.post.post,
  comments: state.comments.comments,
  errors: { post: state.post.errors },
  loading: { post: state.post.loading },
});

export default connect(mapStateToProps)(PostPage);