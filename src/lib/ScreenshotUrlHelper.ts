import type { UrlObject } from 'url';

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
