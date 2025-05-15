/**
 * Centralized skill data for designer and coder sections
 * Used in both home and about page DesignerCoderSection components
 */

export interface SkillSet {
  title: string;
  skills: string[];
}

export const designerSkills: string[] = [
  "Focused on user experience",
  "Skilled at creating intuitive interfaces",
  "Committed to visual consistency",
  "Experienced in designing responsive layouts",
  "Accessibility always prioritized",
];

export const coderSkills: string[] = [
  "Proficient in HTML/CSS/JavaScript",
  "Experienced with React.js & Next.js",
  "TypeScript enthusiast",
  "Specialized in responsive development",
  "Dedicated to performance optimization",
];

export const skillSets: SkillSet[] = [
  {
    title: "My Design Skills",
    skills: designerSkills,
  },
  {
    title: "My Coding Skills",
    skills: coderSkills,
  },
];
