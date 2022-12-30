export interface ITheme {
    color: {
        primary: string
        secondary: string
        text: string
        backgroundColor: string
        disabled: string
        error: string
        success: string
        warning: string
        info: string
        transparent: string
    }
    shadow: {
        small: string
        medium: string
        large: string
    }
    radius: {
        small: string
        medium: string
        large: string
    }
    fontWeight: {
        default: number
        medium: number
        semiBold: number
        bold: number
    }
}

export const defaultTheme: ITheme = {
    color: {
        primary: 'blue',
        secondary: 'gray',
        text: 'black',
        backgroundColor: 'white',
        disabled: 'gray',
        error: 'red',
        success: 'green',
        warning: 'orange',
        info: 'skyblue',
        transparent: 'transparent'
    },
    shadow: {
        small: '0 2px 2px rgba(0, 0, 0, 0.1)',
        medium: '0 2px 8px rgba(0, 0, 0, 0.16)',
        large: '',
    },
    radius: {
        small: '8px',
        medium: '20px',
        large: '50px',
    },
    fontWeight: {
        default: 400,
        medium: 500,
        semiBold: 600,
        bold: 700
    }

}