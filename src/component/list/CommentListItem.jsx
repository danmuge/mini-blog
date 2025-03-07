import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% -32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-redius: 8px;
    cursor: pointer;
    backgournd: white;
    :hover{
        background: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 14px;
`;

function CommentListItem(props){
    const{comment} = props; //사용자가 작성한 댓글 내용

    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );//댓글 내용을 화면에 표시
}

export default CommentListItem;