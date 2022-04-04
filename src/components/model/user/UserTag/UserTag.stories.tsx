import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserTag } from '.';

export default {
  title: 'model/user/UserTag',
  component: UserTag,
} as ComponentMeta<typeof UserTag>;

const Template: ComponentStory<typeof UserTag> = (args) => <UserTag {...args} />;

export const General = Template.bind({});
General.args = {
  color: '#86c3ff',
  label: 'タグ名',
  onClick: () => {},
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  color: '#707070',
  label: 'GitHub',
  src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  onClick: () => {},
};
