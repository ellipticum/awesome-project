import React from 'react'

import { View, Text } from 'react-native'

import styled from 'styled-components/native'

import Post from '@/entities/post'

const UI = {
    Wrapper: styled.View`
        background: #ffffff;
        flex: 1;
        padding: 20px;
    `
}

const Home = ({ navigation }) => {
    const posts = [
        {
            id: '1000',
            title: 'База',
            text: 'Основа',
            date: '14.02.2024',
            image: {
                source: {
                    uri: 'https://sun9-40.userapi.com/impg/ySUAUvZ0v8fZBcJKv1YfLM0DzYDtt6NMIShj_g/ZaEoAv5sL5U.jpg?size=1852x1852&quality=95&sign=503f2c43abfdc63b4cacede726133ef5&type=album'
                }
            }
        }
    ]

    return (
        <UI.Wrapper>
            {posts.map((post) => {
                return (
                    <Post
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        date={post.date}
                        navigation={navigation}
                        image={post.image}
                    />
                )
            })}
        </UI.Wrapper>
    )
}

export default Home
