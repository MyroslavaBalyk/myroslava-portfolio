import React from "react";
import Image from "next/image";

interface SkillCardProps {
  name: string;
  iconPath: string;
  alt?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

//SkillCard component

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  iconPath,
  alt = `${name} icon`,
  description,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`
        p-6 rounded-lg transition-all duration-300 flex flex-col items-center
        bg-gray-50 shadow-sm hover:shadow-md dark:bg-gray-800
        ${onClick ? "cursor-pointer hover:scale-105" : ""}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="mb-3 h-8 w-8 flex items-center justify-center">
        <Image
          src={iconPath}
          alt={alt}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>

      <h3 className="font-semibold text-[var(--color-primary-dark)] dark:text-white">
        {name}
      </h3>

      {description && (
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-center text-sm">
          {description}
        </p>
      )}
    </div>
  );
};

export default SkillCard;
