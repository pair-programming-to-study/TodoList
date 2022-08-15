import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'DesignSystem/components/common/Input',
  components: Input,
  parameters: {
    docs: {
      description: {
        component: 'common input component',
      },
    },
  },
  argTypes: {
    width: { type: 'number' },
    height: { type: 'number' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const BigInput = Template.bind({});
BigInput.args = {
  width: 400,
  height: 100,
};
export const SmallInput = Template.bind({});
SmallInput.args = {
  width: 100,
  height: 50,
};
