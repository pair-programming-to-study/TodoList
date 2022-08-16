import { Meta, Story } from '@storybook/react';
import AuthTemplate, { AuthTemplateProps } from './AuthTemplate';

export default {
  title: 'designSystem/components/common/AuthTemplate',
  component: AuthTemplate,
  parameters: {
    docs: {
      description: {
        component: 'common AuthTemplate component',
      },
    },
  },
  argTypes: {
    title: { type: 'string' },
  },
} as Meta;

const Template: Story<AuthTemplateProps> = (args) => <AuthTemplate {...args} />;

export const SignInAuthTemplate = Template.bind({});
SignInAuthTemplate.args = {
  title: '로그인',
};

export const SignUpAuthTemplate = Template.bind({});
SignUpAuthTemplate.args = {
  title: '회원가입',
};
