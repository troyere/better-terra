import shuffle from 'lodash/shuffle';
import { endScreenshots, netherScreenshots, overworldScreenshots, startScreenshots } from '../cli/generated/Screenshots';

export const getOneStartScreenshot = (): string => shuffle(startScreenshots)[0];

export const getSomeOverworldScreenshots = (limit: number): string[] => {
  return shuffle(overworldScreenshots).slice(0, limit);
};

export const getSomeNetherScreenshots = (limit: number) => {
  return shuffle(netherScreenshots).slice(0, limit);
};

export const getSomeEndScreenshots = (limit: number) => {
  return shuffle(endScreenshots).slice(0, limit);
};
