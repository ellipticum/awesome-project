import React, { Dispatch, SetStateAction, useState } from 'react'

import styled, { css } from 'styled-components/native'

import Post from '@/entities/post'

import Button from '@/shared/ui/button'

import { Text, FlatList } from 'react-native'

const invalidStyle = css`
    border-color: #ff3040;
`

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
    Input: styled.TextInput<{ invalid: boolean }>`
        border: 1px #00000050;
        font-size: 14px;
        padding: 5px 15px;
        border-radius: 50px;
        ${(props) => props.invalid && invalidStyle}
    `,
    Title: styled.Text`
        font-size: 24px;
    `,
    Posts: styled.View`
        gap: 20px;
    `,
    Fields: styled.View`
        gap: 10px;
    `
}

const Home = ({ navigation }) => {
    const [posts, setPosts] = useState([])

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const [isTitleInvalid, setIsTitleInvalid] = useState(false)
    const [isTextInvalid, setIsTextInvalid] = useState(false)

    const [post, setPost] = useState({})

    const getCurrentDate = () => {
        const now = new Date()

        const day = now.getDate()
        const month = now.getMonth() + 1
        const year = now.getFullYear()

        const formattedDay = day < 10 ? `0${day}` : day
        const formattedMonth = month < 10 ? `0${month}` : month

        return `${formattedDay}.${formattedMonth}.${year}`
    }

    const add = () => {
        if (title.length === 0) {
            setIsTitleInvalid(true)

            return
        }

        if (text.length === 0) {
            setIsTextInvalid(true)

            return
        }

        const post = {
            image: {
                source: {
                    uri: 'https://sun9-40.userapi.com/impg/ySUAUvZ0v8fZBcJKv1YfLM0DzYDtt6NMIShj_g/ZaEoAv5sL5U.jpg?size=1852x1852&quality=95&sign=503f2c43abfdc63b4cacede726133ef5&type=album'
                }
            },
            date: getCurrentDate(),
            title,
            text
        }

        setPosts((prevState) => [...prevState, post])
    }

    const clear = () => {
        console.log('clear')

        setTitle('')
        setText('')
    }

    const handleChangeText = (value: string, callback: Dispatch<SetStateAction<string>>) => {
        console.log(value, callback)

        callback(value)

        setIsTitleInvalid(false)
        setIsTextInvalid(false)
    }

    return (
        <UI.Wrapper>
            <UI.Top>
                <UI.Fields>
                    <UI.Input
                        placeholder='Название'
                        value={title}
                        invalid={isTitleInvalid}
                        onChangeText={(value) => handleChangeText(value, setTitle)}
                    />
                    <UI.Input
                        placeholder='Текст'
                        value={text}
                        invalid={isTextInvalid}
                        onChangeText={(value) => handleChangeText(value, setText)}
                    />
                </UI.Fields>
                <UI.Buttons>
                    <Button variant='Accent' onPress={() => add()}>
                        Добавить
                    </Button>
                    <Button onPress={() => clear()}>Очистить</Button>
                </UI.Buttons>
            </UI.Top>

            <UI.Posts>
                <UI.Title>Ваши заметки</UI.Title>
                {posts.length === 0 && <Text>Вы ещё ничего не добавляли</Text>}
                <FlatList
                    data={posts}
                    keyExtractor={(item, index) => `post-${index}`}
                    contentContainerStyle={{ paddingBottom: 300 }}
                    renderItem={({ item }) => (
                        <Post
                            id={item.id}
                            title={item.title}
                            text={item.text}
                            date={item.date}
                            image={item.image}
                            navigation={navigation}
                            setPosts={setPosts}
                        />
                    )}
                />
            </UI.Posts>
        </UI.Wrapper>
    )
}

export default Home
