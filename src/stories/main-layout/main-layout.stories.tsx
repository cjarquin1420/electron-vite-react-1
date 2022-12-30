import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout } from './index';

export default {
  title: 'Layout/MainLayout',
  component: MainLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <h1>Test Layout</h1>,
  px: '50px',
};
