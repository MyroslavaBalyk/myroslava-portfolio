import Image from "next/image";
import { StaticImageData } from "next/image";

type ImageSize = "small" | "large";

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
  className = "",
  imageSize = "small",
}: InterestCardProps) => {

  // Determine image size classes based on the imageSize prop
  const imageSizeClasses =
    imageSize === "large" ? "w-40 h-40" : "w-16 h-16 mb-4";

  // Determine title margin classes based on whether description exists
  const titleMarginClasses = description ? "mb-2" : "mt-3";

  return (
    <div
      className={`
      bg-[var(--color-accent-1)] 
      p-5 rounded-lg 
      shadow-md hover:shadow-lg 
      transition-all duration-300 
      ${className}
    `}
    >
      <div className="flex flex-col items-center">
        {/* Image container with hover effects */}
        <div
          className={`
          rounded-full border-[5px] border-white shadow-lg
          bg-[var(--color-primary-light)] 
          flex items-center justify-center
          ${imageSizeClasses}
          cursor-pointer transition-all duration-300 ease-in-out
          hover:scale-125 hover:shadow-xl hover:z-10
          relative overflow-hidden
        `}
        >
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <h3
          className={`
          text-lg font-semibold 
          ${titleMarginClasses} 
          text-[var(--color-primary-dark)]
        `}
        >
          {title}
        </h3>

        {/* Optional description */}
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
