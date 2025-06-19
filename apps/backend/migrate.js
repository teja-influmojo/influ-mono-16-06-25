const { execSync } = require('child_process');

function run(cmd) {
  try {
    console.log(`Running: ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Error running command: ${cmd}`);
    process.exit(1);
  }
}

// Run Prisma migrate and generate
run('npx prisma migrate deploy');
run('npx prisma generate');

console.log('Migration and Prisma client generation complete.'); 