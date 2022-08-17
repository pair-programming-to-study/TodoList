import { Meta, Story } from '@storybook/react';
import { DriverLine } from '.';
import { DriverLineProps } from './DriverLine';

export default {
  title: 'designSystem/components/common/DriverLine',
  component: DriverLine,
  parameters: {
    docs: {
      description: {
        component: 'common DriverLine component',
      },
    },
  },
  argTypes: {
    width: { type: 'string' },
    color: { type: 'string' },
    mb: { type: 'number' },
    mt: { type: 'number' },
  },
} as Meta;

const Template: Story<DriverLineProps> = (args) => <DriverLine {...args} />;

export const ShortDriverLine = Template.bind({});
ShortDriverLine.args = {
  width: '100px',
  color: 'd4d2cf',
  mb: 10,
  mt: 30,
};

export const LongDriverLine = Template.bind({});
LongDriverLine.args = {
  width: '500px',
  color: 'd4d2cf',
  mb: 10,
  mt: 30,
};
