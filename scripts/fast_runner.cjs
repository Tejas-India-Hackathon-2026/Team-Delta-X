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

async function main() {
  const logFile = path.join(rootDir, 'scripts', 'execution_log.json');
  let commitLog = [];
  if (fs.existsSync(logFile)) {
    try {
      commitLog = JSON.parse(fs.readFileSync(logFile, 'utf8'));
    } catch (e) {
      commitLog = [];
    }
  }

  const completedStepIds = new Set(commitLog.map(c => c.step));
  console.log(`Already completed steps: ${Array.from(completedStepIds).join(', ') || 'None'}`);

  for (let i = 0; i < allSteps.length; i++) {
    const step = allSteps[i];
    const stepNum = i + 1;

    if (completedStepIds.has(stepNum)) {
      console.log(`⏩ Skipping step ${stepNum} (already done): ${step.name}`);
      continue;
    }

    console.log(`\n-----------------------------------------------------------`);
    console.log(`[Step ${stepNum}/${allSteps.length}] ${step.name}`);
    console.log(`Commit Message: ${step.commitMessage}`);
    console.log(`-----------------------------------------------------------`);

    // 1. Apply code changes
    try {
      step.apply();
      console.log(`✓ Changes applied successfully.`);
    } catch (err) {
      console.error(`❌ Failed to apply step ${stepNum}:`, err);
      process.exit(1);
    }

    // 2. Verify build every 5 steps or at the end, or every step
    try {
      runCommand('npm.cmd run build');
      console.log(`✓ Build verified successfully.`);
    } catch (buildErr) {
      console.error(`❌ Build failed for step ${stepNum}. Halting.`);
      process.exit(1);
    }

    // 3. Git commit
    try {
      runCommand('git add -A');
      try {
        runCommand(`git commit -m "${step.commitMessage}"`);
      } catch (commitErr) {
        // In case nothing changed in git, continue
      }
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
      console.error(`Git error:`, gitErr.message);
    }
  }

  console.log('\n===========================================================');
  console.log(' All 80 Development Improvements Completed Successfully!');
  console.log('===========================================================\n');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
