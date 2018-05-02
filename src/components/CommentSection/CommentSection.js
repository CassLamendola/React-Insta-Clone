import React from "react";

const CommentSection = props => {
    return props.comments.map((comment, i) => {
        return (
            <div key={comment.username + i}>
                <div class="commenter">
                    {comment.username}
                </div>
                <div class="comment">
                    {comment.text}
                </div>
            </div>
        )
    })
}

export default CommentSection;