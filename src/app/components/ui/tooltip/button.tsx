import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300',
        {
          'bg-[var(--primary-bg)] text-[var(--primary-color)] hover:bg-[var(--primary-bg-hover)]':
            variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300':
            variant === 'secondary',
          'border border-blue-500 text-blue-500 hover:bg-blue-100':
            variant === 'outline',
          'bg-transparent text-gray-500 hover:bg-gray-100': variant === 'ghost',
          'opacity-50 cursor-not-allowed': isLoading,
        },
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="animate-spin w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;
