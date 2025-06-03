import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createUiTemplate(templateName: string) {
  const currentDir = process.cwd();
  const projectPath = path.join(currentDir, templateName);
  const templatePath = path.join(__dirname, 'blueprint');

  // Check if the project folder already exists
  if (fs.existsSync(projectPath)) {
    throw new Error(`Folder "${templateName}" already exists.`);
  }

  // Copy the blueprint template to the new project folder
  await fs.copy(templatePath, projectPath);

  // Update the package.json file in the new project
  const packageJsonPath = path.join(projectPath, 'package.json');
  const packageJson = await fs.readJSON(packageJsonPath);
  packageJson.name = templateName;
  await fs.writeJSON(packageJsonPath, packageJson, { spaces: 2 });

  // Update the README.md in the blueprint directory
  const readmePath = path.join(projectPath, 'README.md');
  let readmeContent = fs.readFileSync(readmePath, 'utf-8');
  readmeContent = readmeContent.replace(/^# .*/, `# ${templateName}`);
  fs.writeFileSync(readmePath, readmeContent, 'utf-8');
}

export function isValidPackageName(name: string): boolean {
  const validNameRegex = /^[a-z0-9-~][a-z0-9-._~]*$/;
  return validNameRegex.test(name) && name.length <= 214;
}

export function promptUser(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}
