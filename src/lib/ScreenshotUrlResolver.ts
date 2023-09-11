const SCREENSHOTS_FOLDER = '../assets/images/screenshots';

export const getScreenshotUrl = (relativePath: string): string => {
  const url = new URL(`${SCREENSHOTS_FOLDER}/${relativePath}`, import.meta.url);

  return url.href;
}
