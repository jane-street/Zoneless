import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const files = ['index.d.ts', 'index.js', 'index.mjs'];

for (const file of files) {
  const contents = readFileSync(join(distDir, file), 'utf8');
  if (
    contents.includes('@zoneless/shared-types') ||
    contents.includes('@zoneless/shared-schemas')
  ) {
    console.error(
      `Published SDK file ${file} still references unpublished workspace packages.`
    );
    process.exit(1);
  }
}
