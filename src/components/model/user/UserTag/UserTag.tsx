import React from 'react';
import clsx from 'clsx';
import styles from './UserTag.module.css';
import { Avatar, Chip } from '@mui/material';

type UserTagProps = {
  label: string;
  color: string;
  src?: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const UserTag: React.VFC<UserTagProps> = ({ label, color, className, onClick, src }) => {
  return (
    <Chip
      label={label}
      avatar={
        <Avatar sx={{ backgroundColor: color }} src={src}>
          {' '}
        </Avatar>
      }
      sx={{ border: `2px solid ${color}`, backgroundColor: 'transparent' }}
      onClick={onClick}
    />
  );
};
