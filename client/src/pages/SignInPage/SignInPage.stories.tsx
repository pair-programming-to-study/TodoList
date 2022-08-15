import { Meta, Story } from '@storybook/react';
import SignInPage from './SignInPage';

export default {
  title: 'DesignSystem/pages/SignInPage',
  components: SignInPage,
  parameters: {
    docs: {
      description: {
        component: 'SignInPage',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story = (args) => <SignInPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
