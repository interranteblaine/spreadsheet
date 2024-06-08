import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
}

function Button({ variant, children, onClick }: ButtonProps) {
  const className = variant === 'primary' ? styles.primary : styles.secondary;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
