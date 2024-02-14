import React from 'react'

import { View, Text } from 'react-native'

const PostDetails = ({ route }) => {
    const { id } = route.params

    console.log(route)

    return (
        <View>
            <Text>Test: {id}</Text>
        </View>
    )
}

export default PostDetails
