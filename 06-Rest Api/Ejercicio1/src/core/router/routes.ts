import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createcharacter: string;
  editcharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createcharacter: '/characters/create',
  editcharacter: '/characters/:id',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editcharacter'> {
  editcharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editcharacter: (id) => generatePath(switchRoutes.editcharacter, { id }),
};
