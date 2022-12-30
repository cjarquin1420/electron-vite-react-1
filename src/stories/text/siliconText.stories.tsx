import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SiliconText } from './index';

export default {
  title: 'Text/SiliconText',
  component: SiliconText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SiliconText>;

const Template: ComponentStory<typeof SiliconText> = (args) => <SiliconText {...args} />;

export const Default = Template.bind({});
export const subTitle = Template.bind({});
export const Body = Template.bind({});
export const Small = Template.bind({});

Default.args = {
  text: 'Hola mundo',
  variant: 'title',
};

subTitle.args = {
    text: 'Hola mundo',
    variant: 'subTitle',
};

Body.args = {
    text: 'Hola mundo',
    variant: 'body',
};

Small.args = {
    text: 'Hola mundo',
    variant: 'small',
    color: 'error'
};
