import { resolve } from 'path';
import { find } from './FileUtils';
import { writeFile } from 'node:fs/promises';

function sanitize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]/gi, '')
    .replace(/\p{Diacritic}/gu, '');
}

const getLines = async (): Promise<string[]> => {
  const relativePath = '../../assets/images/screenshots';
  const ext = '.webp';
  const dir = resolve(__dirname, relativePath);
  const hierarchy = await find(dir, ext);
  const lines: string[] = [];
  const variables: Record<string, string[]> = {};

  hierarchy.forEach(category => {
    category.children?.forEach(child => {
      const path = `${relativePath}/${category.name}/${child.name}${ext}`;

      const variable = `${category.name}${sanitize(child.name)}`;
      const importLine = `import ${variable} from '${path}?url';`

      lines.push(importLine);

      if (!variables[category.name]) {
        variables[category.name] = [variable];
      } else {
        variables[category.name].push(variable);
      }
    });
  });

  lines.push('');

  const variableEntries = Object.entries(variables);

  for (const [category, variables] of variableEntries) {
    lines.push(`export const ${category}Screenshots: string[] = [`);

    variables.forEach(variable => {
      lines.push(`  ${variable},`);
    });

    lines.push('];');
    lines.push('');
  }

  return lines;
}

export const build = async (): Promise<void> => {
  const relativePath = '../generated';
  const dir = resolve(__dirname, relativePath);
  const lines = await getLines();

  writeFile(`${dir}/Screenshots.ts`, lines.join("\n"));
}
