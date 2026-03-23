import { forwardRef } from "react";

/**
 * Button Component - Flexible, accessible button/link component
 * Supports multiple variants, sizes, and behaviors
 */
const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      onClick,
      disabled = false,
      className = "",
      type = "button",
      target,
      rel,
      ...props
    },
    ref,
  ) => {
    // Base styles - common to all variants
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-semibold no-underline transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evp-accent disabled:opacity-50 disabled:cursor-not-allowed";

    // Variant styles
    const variantStyles = {
      primary:
        "bg-evp-accent text-white border border-transparent hover:-translate-y-0.5 hover:bg-evp-accent-deep hover:shadow-soft active:translate-y-0",
      secondary:
        "border-2 border-evp-accent text-evp-accent bg-transparent hover:bg-evp-accent/5 active:bg-evp-accent/10",
      ghost:
        "text-evp-accent bg-transparent border border-transparent hover:text-evp-accent-deep hover:bg-evp-section/50 active:bg-evp-section",
    };

    // Size styles
    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2.5 text-base",
      lg: "px-6 py-3 text-lg",
    };

    // Combine all styles
    const combinedClassName = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`;

    // Render as link if href is provided
    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          className={combinedClassName}
          target={target}
          rel={rel}
          {...props}
        >
          {children}
        </a>
      );
    }

    // Render as button
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
