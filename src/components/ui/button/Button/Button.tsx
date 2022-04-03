import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';
import { Button as ButtonMUI } from '@mui/material';

type ButtonProps = {
  children: React.ReactNode;
  color?: 'primary' | 'info' | 'warning';
  className?: string;
};

export const Button: React.VFC<ButtonProps> = ({ children, className, color }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <ButtonMUI
        variant='outlined'
        color={color ?? 'info'}
        sx={{
          lineHeight: '1.5',
          padding: '0.5rem 1rem 0.5rem 1rem',
          borderRadius: '0',
          textTransform: 'none',
        }}
      >
        {children}
      </ButtonMUI>
    </div>
  );
};
