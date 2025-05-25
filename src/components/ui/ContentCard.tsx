interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}


const ContentCard = ({
  title,
  children,
  className = '',
  titleClassName = 'text-xl font-semibold mb-4 text-[var(--color-primary)]'
}: ContentCardProps) => {
  return (
    <div className={`bg-[var(--color-accent-1)] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      <h3 className={titleClassName}>
        {title}
      </h3>
      {children}
    </div>
  );
};

export default ContentCard;