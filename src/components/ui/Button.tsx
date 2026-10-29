import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '', // Подхватываем классы снаружи
  ...props 
}) => {
  // Базовые стили
  let styles = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center ";
  
  // Стили для разных вариантов
  if (variant === 'primary') {
    styles += "bg-orange-500 text-white hover:bg-orange-600 shadow-lg ";
  } else if (variant === 'outline') {
    styles += "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white ";
  }

  // Стили для состояния загрузки или отключенной кнопки
  if (isLoading || props.disabled) {
    styles += "opacity-50 cursor-not-allowed ";
  }

  return (
    <button 
      className={`${styles} ${className}`}
      disabled={isLoading || props.disabled} 
      {...props}
    >
      {isLoading ? <span className="animate-pulse">Загрузка...</span> : children}
    </button>
  );
};