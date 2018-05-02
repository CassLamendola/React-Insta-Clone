import React from "react";

const CommentSection = props => {
    return props.comments.map((comment, i) => {
        return (
            <div key={comment.username + i}>
                <div className="commenter">
                    {comment.username}
                </div>
                <div className="comment">
                    {comment.text}
                </div>
            </div>
        )
    })
}

export default CommentSection;