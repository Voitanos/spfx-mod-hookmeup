#!/usr/bin/env node
import { exec } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import PromptSync = require("prompt-sync");

const prompt = PromptSync({ sigint: true });

exec("npm config get prefix", (error, stdout, stderr) => {
  const npmPrefix = stdout.replace('\n', '');
  const generator = path.join(npmPrefix, 'lib/node_modules/@microsoft/generator-sharepoint');
  const reactComponentTemplate = path.join(generator, 'lib/generators/webpart/templates/react/components/{componentName}.tsx');

  // check version & verify
  const generatorVersion: string = JSON.parse(fs.readFileSync(path.join(generator, 'package.json'), 'utf8')).version;
  // split the version of the mod to account for beta versions (ie: 1.9.1-beta.12345)
  const thisVersion: string = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'package.json'), 'utf8')).version.split('-')[0];
  if (generatorVersion !== thisVersion) {
    console.warn(`The version of this mod (v${thisVersion}) does not match your installed version of the Microsoft 365 SPFx Yeoman Generator (v${generatorVersion}). Ensure you run a matching version of the mod, for instance by running 'npx @voitanos/spfx-mod-hoookmeup@${thisVersion}'`);
    process.exit(1);
  } else {
    console.log('Ready to modify the default SPFx generator template for React components...');
    prompt('Press any key to continue (or CTRL+C to abort)...');
  }

  // read in new file
  const newTemplateSource = fs.readFileSync(path.join(__dirname,'../templates/', thisVersion), 'utf8');

  // save the file
  fs.writeFileSync(path.join(reactComponentTemplate), newTemplateSource);

  // thanks
  console.log('');
  console.log('Successfully updated the default Microsoft 365 SPFx Yeoman Generator generator template for React components - new SPFx Web Parts that use React will default to using functional components & React Hooks!');
  console.log('  (1) If you want to undo this, reinstall the generator.');
  console.log('  (2) If upgrade the generator in the future, you need to rerun this command to update the templates.');
  console.log('- by Andrew Connell (https://linkedin.com/in/andrewconnell/) & Voitanos (https://voitanos.io)');
});
