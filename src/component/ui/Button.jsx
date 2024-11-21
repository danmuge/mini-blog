import React from "react";
import styled from "styled-components";

const StyledButton = styled.button` //버튼 태그의 스타일
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props){
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
    //상위 컨포넌트에서 클릭 이벤트 발생할 수 있다. props로 받는 title이 버튼목록에 표시
}

export default Button;