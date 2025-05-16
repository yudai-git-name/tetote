export type navButton = {
  href: string;
  label: string;
  className: string;
};

export const navButtons: navButton[] = [
  {
    href: '/details',
    label: '募集要項',
    className: 'details',
  },
  {
    href: '/entry',
    label: 'ENTRY',
    className: 'entry',
  },
];
