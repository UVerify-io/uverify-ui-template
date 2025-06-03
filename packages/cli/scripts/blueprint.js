import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Update the @uverify/core dependency version in the blueprint package.json

const blueprintPackagePath = path.join(
  __dirname,
  '../dist/blueprint/package.json'
);

const rootPackagePath = path.join(__dirname, '../../core/package.json');
const blueprintPackage = JSON.parse(
  fs.readFileSync(blueprintPackagePath, 'utf-8')
);

const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath, 'utf-8'));
blueprintPackage.dependencies['@uverify/core'] = `^${rootPackage.version}`;

fs.writeFileSync(
  blueprintPackagePath,
  JSON.stringify(blueprintPackage, null, 2),
  'utf-8'
);
