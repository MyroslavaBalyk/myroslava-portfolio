
import SectionHeading from '../ui/SectionHeading';
import InterestCard from '../ui/InterestCard';

// Types
interface Interest {
  title: string;
  imagePath: string;
  imageSize?: "small" | "large";
}

// Data
const interests: Interest[] = [
  {
    title: "Nature Walks",
    imagePath: "/beyond-coding/nature-walks.jpg",
    imageSize: "large",
  },
  {
    title: "Reading Books",
    imagePath: "/beyond-coding/reading -books.jpg",
    imageSize: "large",
  },
  {
    title: "Movies",
    imagePath: "/beyond-coding/movies.jpg",
    imageSize: "large",
  },
  {
    title: "Pets",
    imagePath: "/beyond-coding/pet.jpg",
    imageSize: "large",
  },
  {
    title: "Flowers",
    imagePath: "/beyond-coding/flowersjpg.jpg",
    imageSize: "large",
  },
  {
    title: "Healthy Lifestyle",
    imagePath: "/beyond-coding/healthy-lifestyle.jpg",
    imageSize: "large",
  },
];

const InterestsSection = () => {
  return (
    <section className="mb-16">
      <SectionHeading align="left" withAccent={true}>
        Beyond Coding
      </SectionHeading>
      <p className="text-[var(--color-text-light)] text-lg font-semibold mb-6 -mt-2 ml-1">
        My Interests & Hobbies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <InterestCard
            key={index}
            title={interest.title}
            imagePath={interest.imagePath}
            imageSize={interest.imageSize}
          />
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
