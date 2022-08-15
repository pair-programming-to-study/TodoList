import { Meta, Story } from '@storybook/react';
import SignInForm, { SignInFormProps } from './SignInForm';

export default {
  title: 'designSystem/components/signIn/SignInForm',
  component: SignInForm,
  parameters: {
    docs: {
      description: {
        component: 'signIn SignInForm component',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<SignInFormProps> = (args) => <SignInForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
