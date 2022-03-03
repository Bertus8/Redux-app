import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { useParams } from "react-router-dom";
import {getPostById} from '../actions/postActions';
import {Post} from '../components/Post';
import { getComments } from "../actions/commentsActions";
import  Comment  from "../components/Comment";

const PostPage = ({ dispatch, errors, loading, comments }) => {
  const [ post, setPost ] = useState ([]);

  const { id } = useParams('id');
  useEffect(() => {
    if(id){
    getPostById(id).then((data)=>{
      setPost(data)
    })}
    getComments(id)
  }, []);
  
  const showPost = () => {
    return <Post post={post} summary={false} />
  };
  /*const showComments = () => {
    if (loading.comments) return <p>Loading comments...</p>;
    if (errors.comments) return <p>There has been an error.</p>;
    
    return comments.map((comment) => (
      <Comment key={comment.id} comments={comment} />
    ));
  };*/
  return (
    <div className="container">
      {showPost()}
      <h2>Comments</h2>
      {/*showComments()*/}
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