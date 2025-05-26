
import SectionHeading from '../ui/SectionHeading';
import InterestCard from '../ui/InterestCard';

// Types
interface Interest {
  title: string;
  imagePath: string;
  description: string;
  imageSize?: "small" | "large";
}

// Data
const interests: Interest[] = [
  {
    title: "AI",
    imagePath: "/beyond-coding/ai.png",
    description: "Exploring the latest in artificial intelligence.",
    imageSize: "large",
  },
  {
    title: "Language Learning",
    imagePath: "/beyond-coding/lingq.png",
    description: "LingQ helps me dive into topics from around the world.",
    imageSize: "large",
  },
  {
    title: "Sudoku",
    imagePath: "/beyond-coding/sudoku.png",
    description: "My favorite way to relax and practice problem-solving.",
    imageSize: "large",
  },
  {
    title: "Cycling",
    imagePath: "/beyond-coding/bicycle.JPG",
    description: "A great way to take a break and come back fresh.",
    imageSize: "large",
  },
  {
    title: "My Cat",
    imagePath: "/beyond-coding/cat.jpg",
    description: "My adorable coding buddy",
    imageSize: "large",
  },
  {
    title: "Valorant",
    imagePath: "/beyond-coding/valorant.png",
    description: "I enjoy Valorant for its mix of strategy, quick thinking, and teamwork.",
    imageSize: "large",
  },
  {
    title: "Painting",
    imagePath: "/beyond-coding/painting.jpg",
    description: "Helps me think visually and stay connected to design.",
    imageSize: "large",
  },
  {
    title: "Movies",
    imagePath: "/beyond-coding/movies.jpg",
    description: "I love movies, especially for their plots and visual effects.",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <InterestCard
            key={index}
            title={interest.title}
            description={interest.description}
            imagePath={interest.imagePath}
            imageSize={interest.imageSize}
          />
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
