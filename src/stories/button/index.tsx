import React from 'react'
import Button from '@mui/material/Button';
import { defaultTheme } from '../config/theme';
import { BoxType } from '../Box';
import { SiliconText } from '../text';

type SiliconButtonType = {
    text?: string
    variant?: 'text' | 'contained'| 'outlined' | undefined
    onPress?: () => void
} & Pick<BoxType,
    'mx' |
    'ml' |
    'mr' |
    'my' |
    'mt' |
    'mb' |
    'width'
>

export const SiliconButton: React.FC<SiliconButtonType> = ({
    text,
    onPress,
    variant = 'contained',
    ...props
}) => {
    return (
        <Button
            variant={variant}
            sx = {{
                backgroundColor: variant === 'contained' ? defaultTheme.color.primary : undefined,
                borderRadius: defaultTheme.radius.medium,
                height: '40px',
                mx: props.mx,
                ml: props.ml,
                mr: props.mr,
                my: props.my,
                mt: props.mt,
                mb: props.mb,
                px: '20px',
                width: props.width,
            }}
            onClick={() => {
                if (onPress) onPress()
            }}
        >
            {text ? (
                <SiliconText
                    color={variant === 'contained' ? 'backgroundColor' : 'text'}
                    text={text}
                    fontWeight='semiBold'
                    variant='button'
                />
            ) : null}
        </Button>
    )
} 