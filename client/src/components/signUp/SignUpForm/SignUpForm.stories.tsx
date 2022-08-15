import { Meta, Story } from '@storybook/react';
import SignUpForm, { SignUpFormProps } from './SignUpForm';

export default {
  title: 'designSystem/components/signUp/SignUpForm',
  component: SignUpForm,
  parameters: {
    docs: {
      description: {
        component: 'signIn SignUpForm component',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<SignUpFormProps> = (args) => <SignUpForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
