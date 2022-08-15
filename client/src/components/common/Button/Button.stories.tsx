import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'designSystem/components/common/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'common button component',
      },
    },
  },
  argTypes: {
    width: { type: 'number' },
    height: { type: 'number' },
    variant: {
      type: 'string',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryBigButton = Template.bind({});
PrimaryBigButton.args = {
  width: 400,
  height: 100,
  variant: 'primary',
};
export const PrimarySmallButton = Template.bind({});
PrimarySmallButton.args = {
  width: 100,
  height: 50,
  variant: 'primary',
};
export const SecondarySmallButton = Template.bind({});
SecondarySmallButton.args = {
  width: 100,
  height: 50,
  variant: 'secondary',
};
export const SecondaryBigButton = Template.bind({});
SecondaryBigButton.args = {
  width: 400,
  height: 100,
  variant: 'secondary',
};
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  width: 100,
  height: 50,
  variant: 'primary',
  disabled: true,
};
