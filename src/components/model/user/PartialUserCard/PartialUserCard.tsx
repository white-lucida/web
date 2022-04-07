import React from 'react';
import clsx from 'clsx';
import styles from './PartialUserCard.module.css';
import type { User } from '@/types/user';
import { UserTag } from '../UserTag';
import { Avatar, Box, Stack, Typography } from '@mui/material';

type PartialUserCardProps = {
  children: React.ReactNode;
  className?: string;
  /** 表示するユーザー */
  user: User;
};

/**
 * `PartialUserCard`コンポーネントはユーザー情報の一部だけを表示します。
 *
 * - ユーザー名、アイコン
 * - 自己紹介の冒頭部分
 * - タグの一部
 *
 * Mobileでの一覧表示に使います。
 */
export const PartialUserCard: React.VFC<PartialUserCardProps> = ({ children, className, user }) => {
  return (
    <Box component='article'>
      <Stack direction='row' spacing={0} alignItems='flex-start' sx={{ gap: '1rem' }}>
        <Avatar src={user.discord.avatar_url} sx={{ width: '3.5rem', height: '3.5rem' }} />
        <Stack sx={{ gap: '0' }}>
          <Typography
            component='h3'
            sx={{ fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1' }}
          >
            {user.discord.username}#{user.discord.discriminator}
          </Typography>

          <Typography
            variant='subtitle1'
            sx={{
              fontSize: '0.8rem',
              opacity: '0.8',
              maxWidth: '20rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            gutterBottom
          >
            {user.profile.about}
          </Typography>

          <Stack
            component='ul'
            sx={{ listStyle: 'none', paddingLeft: '0', margin: '0', lineHeight: '1' }}
            direction='row'
            spacing={1}
          >
            {user.profile.tags.map((tag) => (
              <li key={tag.id}>
                <UserTag onClick={() => {}} tag={tag} />
              </li>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
