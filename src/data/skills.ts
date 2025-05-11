export interface Skill {
  name: string;
  iconPath: string;
  alt?: string;
}

export const skills: Skill[] = [
  { name: 'React', iconPath: '/icons/react-icon.svg', alt: 'React logo' },
  { name: 'Next.js', iconPath: '/icons/next-icon.svg', alt: 'Next.js logo' },
  { name: 'TypeScript', iconPath: '/icons/type-script-icon-com.svg', alt: 'TypeScript logo' },
  { name: 'Tailwind CSS', iconPath: '/icons/tailwind-icon-com.svg', alt: 'Tailwind CSS logo' },
  { name: 'JavaScript', iconPath: '/icons/java-script-icon-com.svg', alt: 'JavaScript logo' },
  { name: 'HTML/CSS', iconPath: '/icons/html-icon-com.svg', alt: 'HTML5 logo' },
  { name: 'Git/GitHub', iconPath: '/icons/git-icon-com.svg', alt: 'Git and GitHub logo' },
  { name: 'Responsive Design', iconPath: '/icons/responsive-design-icon-com.svg', alt: 'Responsive Design icon' },
];
