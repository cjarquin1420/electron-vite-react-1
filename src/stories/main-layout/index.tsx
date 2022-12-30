import React from 'react'
import Box from '@mui/material/Box';
import { defaultTheme } from '../config/theme';
import BoxComponent from '../Box';

type MainLayoutType = {
    children: React.ReactNode | JSX.Element
    width?: string
    height?: string
    px?: string
    py?: string
    mx?: string
    my?: string
}

export const MainLayout: React.FC<MainLayoutType> = ({
    children,
    width = '700px',
    height = '600px',
    mx = '20px',
    my = '20px',
    px = '30px',
    py = '20px',
}) => {
 return (
    <BoxComponent
        width={width}
        height={height}
        backgroundColor='backgroundColor'
        flexDirection='column'
        px={px}
        py={py}
        mx={mx}
        my={my}
        borderRadius={defaultTheme.radius.medium}
        boxShadow={defaultTheme.shadow.medium}
    >
        {children}
    </BoxComponent>
 )
}