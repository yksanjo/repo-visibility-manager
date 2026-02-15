#!/usr/bin/env node
const chalk = require('chalk');
const { execSync } = require('child_process');

async function main() {
  console.log(chalk.cyan('\n👁️ Visibility Manager v1.0.0\n'));
  const repos = JSON.parse(execSync('gh repo list yksanjo --limit 100 --json name,isPrivate', { encoding: 'utf8' }));
  const pub = repos.filter(r => !r.isPrivate).length;
  const priv = repos.filter(r => r.isPrivate).length;
  console.log(chalk.green(`  Public: ${pub}`));
  console.log(chalk.red(`  Private: ${priv}`));
  console.log(chalk.yellow(`  Total: ${repos.length}`));
}
if (require.main === module) main().catch(console.error);
module.exports = { main };
