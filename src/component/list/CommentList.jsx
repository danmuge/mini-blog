import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    aligin-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props){
    const {comments} = props; //comment객체들이 있는 배열

    return (
        <Wrapper>
            {comments.map((comment, index) => {
                return (
                    <CommentListItem
                        key={comment.id}
                        comment={comment}
                    />
                );
            })}
        </Wrapper>
    );//comments의 map함수를 통해서 각 comment의 객체들을 화면에 표시

}

export default CommentList;