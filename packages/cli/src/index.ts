#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import readline from 'readline';
import { createRequire } from 'module';
import { createUiTemplate, isValidPackageName, promptUser } from './utils.js';

const require = createRequire(import.meta.url);
const { version, description } = require('../package.json');

const program = new Command();

program.name('uverify').description(description).version(version);

program
  .command('init <template_name>')
  .description('Initialize a new custom UVerify UI template')
  .action(async (templateName) => {
    // Validate the template name
    while (!isValidPackageName(templateName)) {
      console.log(
        chalk.red(
          `Invalid template name: "${templateName}".\n` +
            'Template names must:\n' +
            '- Be lowercase\n' +
            '- Use only letters, numbers, hyphens (-), underscores (_), or periods (.)\n' +
            '- Start with a letter, number, or ~\n' +
            '- Be no longer than 214 characters\n'
        )
      );
      templateName = await promptUser(
        chalk.yellow('Please enter a valid template name: ')
      );
    }

    console.log(chalk.blue(`Initializing template: ${templateName}`));
    try {
      await createUiTemplate(templateName);
      console.log(
        chalk.green(
          `UVerify custom UI template ${templateName} created successfully!`
        )
      );
      console.log(chalk.green(`\nNext steps:`));
      console.log(`  cd ${templateName}`);
      console.log(`  npm install`);
      console.log(`  npm run dev`);
      console.log(
        chalk.green(
          `\nFor more information, check the documentation in the ${templateName}/README.md file.`
        )
      );
    } catch (error) {
      console.error(chalk.red(`Error: ${(error as Error).message}`));
    }
  });

program.parse(process.argv);
