import React from 'react'

import { View, Text } from 'react-native'

import styled from 'styled-components/native'

const UI = {
    Wrapper: styled.View`
        background: #ffffff;
        flex: 1;
        padding: 10px;
    `,
    Post: styled.View`
        display: flex;
        gap: 10px;
    `,
    Image: styled.Image`
        width: 50px;
        height: 50px;
    `
}

const Home = () => {
    return (
        <UI.Wrapper>
            <Text>test!</Text>
        </UI.Wrapper>
    )
}

export default Home
