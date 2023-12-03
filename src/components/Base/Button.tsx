import React, { ReactNode } from 'react';
interface ButtonProps {
  type: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  variant: 'addButton' | 'clearButton';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type,
  disabled = false,
  className = '',
  children,
  variant,
  onClick,
}: ButtonProps) => {
  const handleVariant = () => {
    switch (variant) {
      case 'addButton':
        return 'bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-gray-900';
      case 'clearButton':
        return 'bg-red-400 text-gray-900 hover:bg-red-500 active:bg-red-600 hover:text-gray-100 active:text-gray-100';
    }
  };
  return (
    <button
      onClick={onClick}
      className={`border-red-400 w-full h-[52px] desktop:w-[142px] font-openSans text-bodySmall font-bold rounded-2xl ${className} ${handleVariant()} `}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
