import React, { Dispatch, SetStateAction } from 'react'

import { ImageProps, Text, TouchableOpacity } from 'react-native'

import styled from 'styled-components/native'

import { IImage } from '@/shared/interfaces'

const UI = {
    Post: styled.View`
        flex-direction: row;
        justify-content: flex-start;
        gap: 20px;
        border-bottom-width: 1px;
        border-bottom-color: #00000020;
        padding: 10px 0;
    `,
    Image: styled.Image`
        border-radius: 500px;
        height: 80px;
        aspect-ratio: 1 / 1;
    `,
    Wrapper: styled.View`
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex: 1;
    `,
    Date: styled.Text`
        color: #ffffff40;
    `,
    Meta: styled.View``,
    Content: styled.View`
        flex-direction: column;
        gap: 5px;
    `,
    Title: styled.Text`
        font-size: 25px;
    `
}

interface Props {
    id: string
    title: string
    text: string
    date: string
    image: IImage

    navigation: any
    setPosts: Dispatch<SetStateAction<any[]>>
}

const Post = ({ id, title, text, date, image, navigation, setPosts }: Props) => {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('PostDetails', {
                    post: { id, title, text, image },
                    navigation,
                    setPosts
                })
            }
        >
            <UI.Post>
                <UI.Image {...image} />
                <UI.Wrapper>
                    <UI.Content>
                        <UI.Meta>
                            <Text>{date}</Text>
                            <UI.Title>{title}</UI.Title>
                        </UI.Meta>
                        <Text>{text}</Text>
                    </UI.Content>
                </UI.Wrapper>
            </UI.Post>
        </TouchableOpacity>
    )
}

export default Post
