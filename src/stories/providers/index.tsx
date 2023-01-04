import React from 'react'
import { Provider } from 'react-redux'
import Alert from '../alert'
import { UIStore } from './store'

export const UIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={UIStore}>
            {children}
            <Alert />
        </Provider>
    )
}