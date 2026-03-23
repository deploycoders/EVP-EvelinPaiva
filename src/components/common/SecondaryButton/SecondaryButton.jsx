import Button from "@/components/common/Button/Button";

/**
 * SecondaryButton - Backwards compatible wrapper around Button component
 * Recommended: Use <Button variant="secondary" /> directly for new components
 */
function SecondaryButton({ children, href = "#contact", className = "" }) {
  return (
    <Button href={href} variant="secondary" size="md" className={className}>
      {children}
    </Button>
  );
}

export default SecondaryButton;
