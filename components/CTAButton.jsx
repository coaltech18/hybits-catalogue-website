'use client';

export default function CTAButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const baseClasses =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-hybits-green focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-[#1A382E] text-white hover:bg-[#153026]',
    secondary:
      'border border-[#58B692] text-[#1A382E] bg-white hover:bg-[#E3F7EF]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}

