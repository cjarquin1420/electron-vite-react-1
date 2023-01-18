import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react'
import { defaultTheme } from '../config/theme';

type variantType = {
    fontSize: number,
    fontWeight: number,
    color: string,
    textTransform?: TypographyProps['textTransform']
}

type variantsType = {
    title: variantType
    subTitle: variantType
    body: variantType
    small: variantType
    button: variantType
}

export const variants: variantsType = {
    title: {
        fontSize: 30,
        fontWeight: defaultTheme.fontWeight.bold,
        color: defaultTheme.color.text,
        textTransform: 'none',
    },
    subTitle: {
        fontSize: 22,
        fontWeight: defaultTheme.fontWeight.bold,
        color: defaultTheme.color.text,
        textTransform: 'none',
    },
    body: {
        fontSize: 16,
        fontWeight: defaultTheme.fontWeight.default,
        color: defaultTheme.color.text,
        textTransform: 'none',
    },
    small: {
        fontSize: 12,
        fontWeight: defaultTheme.fontWeight.default,
        color: defaultTheme.color.text,
        textTransform: 'none',
    },
    button: {
        fontSize: 13,
        fontWeight: defaultTheme.fontWeight.default,
        color: defaultTheme.color.text,
        textTransform: 'uppercase',
    }
}

type SiliconTextProps = {
    text: string
    variant?: keyof typeof variants
    color?: keyof typeof defaultTheme.color
    fontWeight?: keyof typeof defaultTheme.fontWeight
} & Pick<TypographyProps, 'lineHeight' | 'textAlign' | 'fontSize'>

export const SiliconText: React.FC<SiliconTextProps> = ({
    text,
    variant = 'body',
    color,
    fontWeight,
    ...props
}) => {
    const {
        color: localColor,
        fontWeight: fWeight,
        ...variantprops
    } = variants[variant] ?? {}
    const colorCode = defaultTheme.color[color!] ? defaultTheme.color[color!] : localColor
    const fontWeightValue = defaultTheme.fontWeight[fontWeight!] ? defaultTheme.fontWeight[fontWeight!] : fWeight

    return (
        <Typography
            variant="body1"
            component="p"
            { ...variantprops }
            { ...props }
            color={colorCode}
            fontWeight={fontWeightValue}
        >
            {text}
        </Typography>
    )
}