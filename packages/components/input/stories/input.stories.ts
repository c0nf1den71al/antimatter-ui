import type { Meta, StoryObj } from '@storybook/react';

import {Input} from '../src';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;


export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Username',
  }
};