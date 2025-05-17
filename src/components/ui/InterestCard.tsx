import { StaticImageData } from 'next/image';
import { cn } from '../../lib/utils';
import CircularImage from './CircularImage';

type ImageSize = 'small' | 'large';

interface InterestCardProps {
  title: string;
  description?: string;
  imagePath: string | StaticImageData;
  className?: string;
  imageSize?: ImageSize;
}

const InterestCard = ({
  title,
  description,
  imagePath,
  className = '',
  imageSize = 'small',
}: InterestCardProps) => {
  return (
    <div
      className={cn(
        'bg-[var(--color-accent-1)]',
        'p-5 rounded-lg',
        'shadow-md hover:shadow-lg',
        'transition-all duration-300',
        className
      )}
    >
      <div className="flex flex-col items-center">
        <CircularImage
          src={imagePath}
          alt={title}
          size={imageSize === 'large' ? 'large' : 'small'}
          className={!description ? 'mb-0' : undefined}
          containerClassName={!description ? 'mb-0' : undefined}
        />

        <h3
          className={cn(
            'text-lg font-semibold',
            'text-[var(--color-primary-dark)]',
            description ? 'mb-2' : 'mt-3'
          )}
        >
          {title}
        </h3>

        {description && (
          <p className="text-[var(--color-text-light)] text-sm text-center">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default InterestCard;
