import React from 'react'

import { View, Text } from 'react-native'

import styled from 'styled-components/native'

const UI = {
    Wrapper: styled.View`
        padding: 20px;
        align-items: center;
        gap: 30px;
    `,
    Content: styled.View`
        align-items: center;
        gap: 20px;
    `,
    Image: styled.Image`
        width: 300px;
        height: 300px;
        border-radius: 555px;
    `,
    Title: styled.Text`
        font-size: 24px;
    `,
    Text: styled.Text`
        font-size: 18px;
    `
}

const PostDetails = ({ route }) => {
    const { post } = route.params

    return (
        <UI.Wrapper>
            <UI.Image {...post.image} />
            <UI.Content>
                <UI.Title>{post.title}</UI.Title>
                <UI.Text>{post.text}</UI.Text>
            </UI.Content>
        </UI.Wrapper>
    )
}

export default PostDetails
