import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UtilitiesScreen } from './index';

export default {
  title: 'Pages/UtilitiesScreen',
  component: UtilitiesScreen,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UtilitiesScreen>;

const Template: ComponentStory<typeof UtilitiesScreen> = (args) => <UtilitiesScreen {...args} />;

export const Default = () => {
    const [commandList, setCommandList] = React.useState<Array<string>>([])

    return (
        <Template
            commandList={commandList}
            onBackup={async () => {
                const arr = Array.from(Array(50).keys())
                const strArr: Array<string> = []
                for(const item in arr) {
                    strArr.push(`this is the item number ${item}`)
                }

                setCommandList(strArr)
            }}
        />
    )
};
