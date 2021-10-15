import styled from "styled-components";
import React from 'react'

const Main = () => {
    return (
        <Container>
            <ShareBox>Share</ShareBox>
        </Container>
    )
}
const Container = styled.div`
    grid-area: main;
`
const CommonCard=styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius:5px;
    position: relative;
    border: none;

`
const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;
`
export default Main;
