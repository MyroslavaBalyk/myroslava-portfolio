// SectionHeading component for consistent section titles across the portfolio

type HeadingAlignment = 'left' | 'center' | 'right';
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: HeadingAlignment;
  withAccent?: boolean;
  accentColor?: 'primary' | 'secondary';
  as?: HeadingLevel;
  id?: string;
}
/**
 * SectionHeading component
 * 
 * A reusable heading component with customizable alignment, accent line, and heading level
 */
export default function SectionHeading({ 
  children, 
  className = '',
  align = 'center',
  withAccent = true,
  accentColor = 'primary',
  as: Component = 'h2',
  id,
}: SectionHeadingProps) {
  // Text alignment classes
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];
  
  // Accent color classes
  const accentColorClass = {
    primary: 'bg-[var(--color-primary)]',
    secondary: 'bg-[var(--color-primary-dark)]',
  }[accentColor];
  
  // Accent position based on alignment
  const accentPositionClass = {
    left: '',
    center: 'left-1/2 -translate-x-1/2',
    right: 'left-auto right-0',
  }[align];

  return (
    <Component 
      id={id} 
      className={`
        text-3xl md:text-4xl font-bold mb-8 
        text-[var(--color-text-main)] 
        font-[var(--font-vollkorn-sc)]
        ${alignmentClass}
        ${withAccent ? 'relative pb-4' : ''}
        ${className}
      `}
    >
      {children}
      {withAccent && (
        <span 
          className={`
            absolute bottom-0 left-0 h-1 w-16 transform
            ${accentColorClass}
            ${accentPositionClass}
          `} 
          aria-hidden="true" 
        />
      )}
    </Component>
  );
}
