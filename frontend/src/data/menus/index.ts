import { MenuItem } from '../../types';
import { breakfastMenu } from './breakfastMenu';
import { hotMenu } from './hotMenu';
import { coldMenu } from './coldMenu';
import { bagelsMenu } from './bagelsMenu';
import { saladsMenu } from './saladsMenu';
import { houseSpecialsMenu } from './houseSpecialsMenu';

// Combine all menus into a single array
export const menuItems: MenuItem[] = [
  ...breakfastMenu,
  ...hotMenu,
  ...coldMenu,
  ...houseSpecialsMenu,
  ...bagelsMenu,
  ...saladsMenu
];