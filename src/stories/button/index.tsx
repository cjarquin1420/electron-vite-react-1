import React from 'react'
import Button from '@mui/material/Button';
import { defaultTheme } from '../config/theme';
import { BoxType } from '../Box';

type SiliconButtonType = {
    text: string
    variant?: 'text' | 'contained'| 'outlined' | undefined
    onPress?: () => void
} & Pick<BoxType,
    'mx' |
    'ml' |
    'mr' |
    'my'
>

export const SiliconButton: React.FC<SiliconButtonType> = ({
    text,
    onPress,
    variant,
    ...props
}) => {
    return (
        <Button
            variant={variant}
            sx = {{
                backgroundColor: variant === 'contained' ? defaultTheme.color.primary : undefined,
                borderRadius: defaultTheme.radius.small,
                maxHeight: '40px',
                mx: props.mx,
                ml: props.ml,
                mr: props.mr,
                my: props.my
            }}
            onClick={() => {
                if (onPress) onPress()
            }}
        >
            <h4>{text}</h4>
        </Button>
    )
} 