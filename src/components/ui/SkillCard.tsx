import Image from "next/image";

interface SkillCardProps {
  name: string;
  iconPath: string;
  alt?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

const SkillCard = ({
  name,
  iconPath,
  alt = `${name} icon`,
  description,
  className = "",
  onClick,
}: SkillCardProps) => {
  const bgColor = 'bg-[var(--color-accent-1)]'; 
  return (
    <div
      className={`
        p-6 rounded-lg transition-all duration-300 flex flex-col items-center
        ${bgColor} shadow-sm
        hover:translate-y-[-3px]
        hover:shadow-[0_5px_15px_rgba(23,107,135,0.3)]
        ${onClick ? "cursor-pointer hover:scale-[1.02]" : "hover:scale-[1.02]"}
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

      <h3 className="font-semibold text-[var(--color-primary-dark)]">
        {name}
      </h3>

      {description && (
        <p className="mt-2 text-[var(--color-text-light)] text-center text-sm">
          {description}
        </p>
      )}
    </div>
  );
};

export default SkillCard;
