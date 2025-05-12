import React from 'react';

interface ApproachCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ApproachCard: React.FC<ApproachCardProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-white dark:bg-gray-700 p-5 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
      <h3 className="text-lg font-semibold mb-3 text-[var(--color-primary-dark)]">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        {children}
      </p>
    </div>
  );
};

export default ApproachCard;