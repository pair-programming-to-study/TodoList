import { Meta, Story } from '@storybook/react';
import SignUpPage from './SignUpPage';

export default {
  title: 'DesignSystem/pages/SignUpPage',
  components: SignUpPage,
  parameters: {
    docs: {
      description: {
        component: 'SignUpPage',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story = (args) => <SignUpPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
