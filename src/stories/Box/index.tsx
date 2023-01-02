import React from 'react'
import Box, { BoxProps } from '@mui/material/Box';
import { defaultTheme } from '../config/theme';

export type BoxType = {
    children?: React.ReactNode,
    width?: string
    height?: string
    px?: string
    py?: string
    mx?: string
    my?: string
    backgroundColor?: keyof typeof defaultTheme.color
} & Omit<BoxProps, 'sx'> & BoxProps['sx']

const BoxComponent: React.FC<BoxType> = ({
    children,
    width,
    height,
    mx,
    my,
    px,
    py,
    backgroundColor = 'transparent',
    ...props
}) => {
 return (
    <Box
      sx={{
        width: width,
        height: height,
        backgroundColor: defaultTheme.color[backgroundColor],
        display: 'flex',
        flexDirection: 'column',
        paddingX: px,
        paddingY: py,
        marginX: mx,
        marginY: my,
        ...props,
      }}
      {...props}
    >
        {children}
    </Box>
 )
}

export default BoxComponent