import React from 'react';

const Button = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  icon = null, // Default to null, no icon unless specified
  iconPosition = 'right',
  size = 'default',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-300 group';

  const sizes = {
    default: 'px-8 py-2 text-lg',
    small: 'px-4 py-2 text-sm',
    large: 'px-10 py-4 text-xl',
    none: 'p-0 text-sm',
  };

  const variants = {
    primary: 'bg-[#004F33] text-white hover:bg-[#006c45] focus:outline-none focus:ring-2 focus:ring-[#004F33]',
    secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#004F33]',
    cta: 'bg-white text-[#004F33] hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#004F33]',
    cta2: 'bg-[#639e4e] text-white hover:bg-[#4a7c3a] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#639e4e]',
    link: 'bg-transparent text-[#004F33] hover:text-[#006646] px-0 py-0 font-semibold',
  };

  const iconMarkup =
    icon && (
      <span
        className={`text-xl transition-transform group-hover:translate-x-1 ${
          iconPosition === 'left' ? 'order-first -ml-1' : ''
        }`}
      >
        {icon}
      </span>
    );

  const content = (
    <>
      {iconPosition === 'left' && iconMarkup}
      {children}
      {iconPosition === 'right' && iconMarkup}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  return href ? (
    <a href={href} className={combinedClasses} {...props}>
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;