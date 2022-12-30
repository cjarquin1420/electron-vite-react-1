import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SiliconButton } from './index';

export default {
  title: 'Button/SiliconButton',
  component: SiliconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SiliconButton>;

const Template: ComponentStory<typeof SiliconButton> = (args) => <SiliconButton {...args} />;

export const Default = Template.bind({});
export const textButton = Template.bind({});
export const outlineButton = Template.bind({});

Default.args = {
  text: 'continuar',
  variant: 'contained',
};

textButton.args = {
    text: 'continuar',
    variant: 'text',
};

outlineButton.args = {
    text: 'continuar',
    variant: 'outlined',
};
