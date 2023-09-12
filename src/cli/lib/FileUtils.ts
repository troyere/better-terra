import { parse, extname, join } from 'path';
import { readdir, stat } from 'node:fs/promises';

export interface FileInfo {
  name: string;
  children?: FileInfo[];
}

export const find = async (dir: string, extension: string): Promise<FileInfo[]> => {
  const files = await readdir(dir);
  const fileResults: FileInfo[] = [];

  await Promise.all(
    files.map(async file => {
      const filePath = join(dir, file);
      const fileStat = await stat(filePath);
      const fileParsed = parse(filePath);

      if (fileStat.isDirectory()) {
        fileResults.push({ name: fileParsed.name, children: await find(filePath, extension) });
      } else if (extname(file) === extension) {
        fileResults.push({ name: fileParsed.name });
      }
    })
  );

  return fileResults;
};
