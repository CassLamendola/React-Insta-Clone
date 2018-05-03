import React from 'react';
import CommentSection from "../CommentSection/CommentSection"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

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
            // <div key={i + post.username}>
            //     <Card>
            //         <CardTitle>
            //             <img src={post.thumbnailUrl} alt="user thumbnail" className="user-img"/>
            //             <h3>{post.username}</h3>
            //         </CardTitle>
            //         <CardImg src={post.imageUrl} alt="user's image"/>
            //         <CardBody>
            //             <div className="like-icons">
            //                 <i className="far fa-heart"></i>
            //                 <i className="far fa-comment"></i>
            //             </div>
            //             <CardText>{`${post.likes} likes`}</CardText>
            //             <CardText><CommentSection comments={post.comments}/></CardText>
            //             <CardText className="time">{`2 HOURS AGO`}</CardText>
            //             <input placeholder="Add a comment..." name="comment-box" className="comment-box"/>
            //             <CardText>...</CardText>
            //         </CardBody>
            //     </Card>
            // </div>
        )
    })
};

export default PostContainer;