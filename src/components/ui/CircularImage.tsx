import Image, { StaticImageData } from "next/image";
import { cn } from "../../lib/utils";

type ImageSize = "small" | "medium" | "large";

interface CircularImageProps {
  src: string | StaticImageData;
  alt: string;
  size?: ImageSize;
  className?: string;
  withHoverEffect?: boolean;
  borderWidth?: number | string;
  borderColor?: string;
  containerClassName?: string;
}

const sizeClasses: Record<ImageSize, string> = {
  small: "w-16 h-16",
  medium: "w-24 h-24",
  large: "w-40 h-40",
};

const CircularImage = ({
  src,
  alt,
  size = "medium",
  className = "",
  withHoverEffect = true,
  borderWidth = 5,
  borderColor = "white",
  containerClassName = "",
}: CircularImageProps) => {
  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden",
        "bg-[var(--color-accent-1)]",
        "shadow-lg transition-all duration-300",
        withHoverEffect && "hover:shadow-xl hover:z-10 hover:scale-105",
        sizeClasses[size],
        containerClassName
      )}
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={size === "small" ? "4rem" : size === "medium" ? "6rem" : "10rem"}
        className={cn("object-cover", className)}
        loading="eager"
        quality={80}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM2NENDQzUiLz48L3N2Zz4="
      />
    </div>
  );
};

export default CircularImage;
