import React from 'react'

import { View, Text, TextInput } from 'react-native'

import styled from 'styled-components/native'

import Post from '@/entities/post'

import Button from '@/shared/ui/button'

const UI = {
    Wrapper: styled.View`
        background: #ffffff;
        flex: 1;
        gap: 100px;
        padding: 20px;
    `,
    Top: styled.View`
        gap: 20px;
    `,
    Buttons: styled.View`
        flex-direction: row;
        gap: 10px;
    `,
    Input: styled.TextInput`
        border: 1px #000000;
        font-size: 14px;
        padding: 5px 15px;
        border-radius: 50px;
    `,
    Title: styled.Text`
        font-size: 24px;
    `,
    Posts: styled.View`
        gap: 20px;
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
        },
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
            <UI.Top>
                <UI.Input />
                <UI.Buttons>
                    <Button variant='Accent' onPress={() => console.log('test')}>
                        Добавить
                    </Button>
                    <Button onPress={() => console.log('test')}>Очистить</Button>
                </UI.Buttons>
            </UI.Top>

            <UI.Posts>
                <UI.Title>Ваши заметки</UI.Title>
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
            </UI.Posts>
        </UI.Wrapper>
    )
}

export default Home
