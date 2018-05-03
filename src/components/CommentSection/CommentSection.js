import React from "react";

const CommentSection = props => {
    return props.comments.map((comment, i) => {
        return (
            <div key={comment.username + i}>
                <div className="comment">
                    <strong>{comment.username}</strong>{` ${comment.text}`}
                </div>
            </div>
        )
    })
}

export default CommentSection;