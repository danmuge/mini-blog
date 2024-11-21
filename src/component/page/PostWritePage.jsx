import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState(''); //글 제목
    const [content, setContent] = useState('');//글 내용

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                <Button
                    title='글 작성하기'
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </Container>
        </Wrapper>
    );
     //TextInput 컨포넌트로 글과 내용을 입력받을 수 있다. (useState로 바꿨을 때 onChange 함수를 
    //실행하고 변경된 value값으로 업데이트한다. )
    //Button 컨포넌트로 글 작성 버튼 
}

export default PostWritePage;