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

const Home = () => {
    return (
        <UI.Wrapper>
            <Post
                image={{
                    source: {
                        uri: 'https://sun9-40.userapi.com/impg/ySUAUvZ0v8fZBcJKv1YfLM0DzYDtt6NMIShj_g/ZaEoAv5sL5U.jpg?size=1852x1852&quality=95&sign=503f2c43abfdc63b4cacede726133ef5&type=album'
                    }
                }}
                title='База'
                text='Основа'
                date='14.02.2024'
            />
        </UI.Wrapper>
    )
}

export default Home
