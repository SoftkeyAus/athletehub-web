import { spawn } from 'child_process';

const serve = spawn('serve', ['-s', './dist', '-l', '3000'], { stdio: 'inherit' });

serve.on('close', (code) => {
    console.log(`serve process exited with code ${code}`);
});
