import type { Meta } from '@storybook/react';
import Button from '../src/button'

const meta: Meta<typeof Button> = {
    component: Button,
  };
  
export default meta;

export const Primary: Story = {
    render: () => <Button text="Button" />,
};