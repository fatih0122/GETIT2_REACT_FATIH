import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "파티흐",
        comment: "안녕하세요",
    },
    {
        name: "Jack",
        comment: "React is so fun!",
    },
    {
        name: "خالد",
        comment: "انا كمان اريد ان اتعلم رياكت"
    },
    
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
            
    );
}

export default CommentList;