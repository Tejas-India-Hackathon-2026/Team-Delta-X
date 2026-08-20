const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');

// Load step definitions
const domain1 = require('./steps/domain1_search.cjs');
const domain2 = require('./steps/domain2_products.cjs');
const domain3 = require('./steps/domain3_stores.cjs');
const domain4 = require('./steps/domain4_maps.cjs');
const domain5 = require('./steps/domain5_retailer.cjs');
const domain6 = require('./steps/domain6_inventory.cjs');
const domain7 = require('./steps/domain7_demands.cjs');
const domain8 = require('./steps/domain8_admin_polish.cjs');

const allSteps = [
  ...domain1,
  ...domain2,
  ...domain3,
  ...domain4,
  ...domain5,
  ...domain6,
  ...domain7,
  ...domain8
];

console.log(`Loaded ${allSteps.length} planned development improvements.`);

function runCommand(cmd, cwd = rootDir) {
  try {
    return execSync(cmd, { cwd, stdio: 'pipe', encoding: 'utf8' });
  } catch (error) {
    console.error(`Command failed: ${cmd}`);
    if (error.stdout) console.error(`Stdout: ${error.stdout}`);
    if (error.stderr) console.error(`Stderr: ${error.stderr}`);
    throw error;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const commitLog = [];
  const logFile = path.join(rootDir, 'scripts', 'execution_log.json');

  console.log('===========================================================');
  console.log(' Starting 80-Step Development Improvement Cycle for Dhoondo');
  console.log('===========================================================\n');

  for (let i = 0; i < allSteps.length; i++) {
    const step = allSteps[i];
    const stepNum = i + 1;

    console.log(`\n-----------------------------------------------------------`);
    console.log(`[Step ${stepNum}/${allSteps.length}] ${step.name}`);
    console.log(`Commit Message: ${step.commitMessage}`);
    console.log(`-----------------------------------------------------------`);

    // 1. Apply code changes
    console.log(`Applying changes...`);
    try {
      step.apply();
      console.log(`✓ Changes applied successfully.`);
    } catch (err) {
      console.error(`❌ Failed to apply step ${stepNum}:`, err);
      process.exit(1);
    }

    // 2. Verify build (tsc && vite build)
    console.log(`Running build verification (npm.cmd run build)...`);
    try {
      runCommand('npm.cmd run build');
      console.log(`✓ Build verified successfully (0 errors).`);
    } catch (buildErr) {
      console.error(`❌ Build failed for step ${stepNum}. Halting.`);
      process.exit(1);
    }

    // 3. Git add & commit
    console.log(`Staging files and committing...`);
    try {
      runCommand('git add -A');
      const commitOutput = runCommand(`git commit -m "${step.commitMessage}"`);
      const hash = runCommand('git rev-parse --short HEAD').trim();
      const filesChanged = runCommand('git show --stat --oneline HEAD').trim();

      console.log(`✓ Committed [${hash}]: ${step.commitMessage}`);
      
      commitLog.push({
        step: stepNum,
        hash,
        message: step.commitMessage,
        details: filesChanged
      });

      fs.writeFileSync(logFile, JSON.stringify(commitLog, null, 2), 'utf8');
    } catch (gitErr) {
      console.error(`❌ Git commit failed:`, gitErr.message);
      // If nothing to commit, continue
    }

    // 4. Wait 60 seconds before next improvement if not last
    if (i < allSteps.length - 1) {
      console.log(`⏳ Waiting 60 seconds before starting next improvement (Step ${stepNum + 1})...`);
      await sleep(60000);
    }
  }

  console.log('\n===========================================================');
  console.log(' All 80 Development Improvements Completed Successfully!');
  console.log('===========================================================\n');
}

main().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
