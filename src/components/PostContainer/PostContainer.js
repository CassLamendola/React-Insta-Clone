import React from 'react';
import CommentSection from "../CommentSection/CommentSection"

const PostContainer = props => {
    return props.data.map((post, i) => {
        return (
            <div key={i + post.username}>
                <div class="post">
                    <div class="post-heading">
                        <img src={post.thumbnailUrl} alt="user thumbnail"/>
                        <span class="username">{post.username}</span>
                    </div>
                    <div class="post-img">
                        <img src={post.imageUrl} alt="user's image"/>
                    </div>
                    <div class="likes">
                        <i class="far fa-heart"></i>
                        <i class="far fa-comment"></i>
                    </div>
                    <div class="comments">
                        <CommentSection comments={post.comments}/>
                    </div>
                </div>
            </div>
        )
    })
};

export default PostContainer;