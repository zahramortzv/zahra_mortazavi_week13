
export const profile = {
  name: 'Zahra Mortazavi',
  initials: 'ZM',
  role: 'Frontend developer',
};

export const about = {
  text: 'I’m a bootcamp student learning to build clean, accessible interfaces with React. Right now I’m focused on reusable components and CSS that stays easy to change.', // TODO: متن خودت رو بنویس
  stats: [
    { id: 'weeks', value: '13', label: 'Weeks of bootcamp' },
    { id: 'projects', value: '3', label: 'Projects built' }, 
    { id: 'commits', value: '50', label: 'Commits pushed' }, 
  ],
};

export const skills = [
  { id: 'react', name: 'React', level: 'Learning', percent: 55 },
  { id: 'js', name: 'JavaScript', level: 'Learning', percent: 60 },
  { id: 'css', name: 'CSS', level: 'Intermediate', percent: 70 },
  { id: 'git', name: 'Git and GitHub', level: 'Learning', percent: 50 },
];

export const projects = [
  {
    id: 'tabs',
    title: 'Tabs component',
    description: 'Reusable and keyboard accessible',
    status: 'wip', // 'wip' | 'done'
  },
  {
    id: 'botostart',
    title: 'Botostart',
    description: 'React app set up with Vite',
    status: 'done',
  },
];