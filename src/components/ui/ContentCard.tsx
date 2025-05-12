import React from 'react';

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

/**
 * A reusable card component for displaying content with a title
 * Used for various sections like skills, approach cards, etc.
 */
const ContentCard: React.FC<ContentCardProps> = ({
  title,
  children,
  className = '',
  titleClassName = 'text-xl font-semibold mb-4 text-[var(--color-primary)]'
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <h3 className={titleClassName}>
        {title}
      </h3>
      {children}
    </div>
  );
};

export default ContentCard;