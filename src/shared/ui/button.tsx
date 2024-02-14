import React, { ReactNode } from 'react'

import styled from 'styled-components/native'

const UI = {
    Base: styled.TouchableOpacity`
        padding: 10px 25px;
        border-radius: 50px;
    `,
    Text: styled.Text`
        color: #ffffff;
        font-size: 20px;
    `
}

const Variants = {
    Standard: styled(UI.Base)`
        background: #202020;
    `,
    Accent: styled(UI.Base)`
        background: #ff0055;
    `
}

interface Props {
    children: ReactNode
    onPress: () => void
    variant?: 'Standard' | 'Accent'
}

const Button = ({ children, onPress, variant = 'Standard' }: Props) => {
    const Variant = Variants[variant]

    return (
        <Variant>
            <UI.Text>{children}</UI.Text>
        </Variant>
    )
}

export default Button
