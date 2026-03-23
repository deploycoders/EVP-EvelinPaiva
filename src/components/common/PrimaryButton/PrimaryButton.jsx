import Button from "@/components/common/Button/Button";

/**
 * PrimaryButton - Backwards compatible wrapper around Button component
 * Recommended: Use <Button variant="primary" /> directly for new components
 */
function PrimaryButton({ children, href = "#contact", className = "" }) {
  return (
    <Button href={href} variant="primary" size="md" className={className}>
      {children}
    </Button>
  );
}

export default PrimaryButton;
