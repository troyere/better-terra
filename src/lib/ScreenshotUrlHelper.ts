import type { UrlObject } from 'url';
import shuffle from 'lodash/shuffle';

export const getScreenshotUrl = (path: string): UrlObject => {
  return new URL(path, import.meta.url);
}

type GlobResult = Record<string, () => Promise<unknown>>;

/**
 * @example getScreenshotUrls(import.meta.glob('../assets/images/screenshots/overworld/*.webp'))
 * @example getScreenshotUrls(import.meta.glob('../assets/images/screenshots/nether/*.webp'))
 * @example getScreenshotUrls(import.meta.glob('../assets/images/screenshots/end/*.webp'))
 */
export const getScreenshotUrls = (globResult: GlobResult): UrlObject[] => {
  return Object.keys(globResult).map(getScreenshotUrl);
}

export const getSomeScreenshotUrls = (globResult: GlobResult, limit: number) => {
  const shuffledKeys = shuffle(Object.keys(globResult));

  return shuffledKeys.slice(0, limit).map(getScreenshotUrl);
}
