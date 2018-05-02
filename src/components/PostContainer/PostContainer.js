import React from 'react';
import CommentSection from "../CommentSection/CommentSection"

const PostContainer = props => {
    return props.data.map((post, i) => {
        return (
            <div key={i + post.username} className="post">
                <div className="post-heading">
                    <img src={post.thumbnailUrl} alt="user thumbnail" className="user-img"/>
                    <span className="username">{post.username}</span>
                </div>

                <img src={post.imageUrl} alt="user's image" className="post-img"/>

                <div className="likes">
                    <div className="like-icons">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <span className="num-likes">{`${post.likes} likes`}</span>
                </div>
                <div className="comments">
                    <CommentSection comments={post.comments}/>
                </div>
                <span className="time">{`2 HOURS AGO`}</span>
                <div className="add-comment">
                    <input placeholder="Add a comment..." name="comment-box" className="comment-box"/>
                    <span>...</span>
                </div>
            </div>
        )
    })
};

export default PostContainer;