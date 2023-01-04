import React from 'react';
import { useAlert } from './useAlert';
import { SiliconButton } from '../button/index';
import { UIProvider } from '../providers';
import BoxComponent from '../Box';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'alert/default',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const InternalAlert: React.FC = () => {
    const alert = useAlert()

    return (
        <SiliconButton
            text='open modal'
            onPress={() => {
                alert.open({
                    title: 'title test',
                    message: 'hellow word'
                })
            }}
        />
    )
}


export const Default = () => {
    return (
        <UIProvider>
            <InternalAlert />
        </UIProvider>
    )
}
