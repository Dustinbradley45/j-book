import { Command } from 'commander';
import { serve } from '@code-book/local-api';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

export const serveCommand = new Command()
    .command('serve [filename]')
    .description('Open a file for editing')
    .option('-p, --port <number>, --port=<number>', 'port to run server on', '4005')
    .action(async (filename = 'nodebook.js', options: { port: string }) => {
        try {
            const dir = path.join(process.cwd(), path.dirname(filename));
            await serve(parseInt(options.port), path.basename(filename), dir, !isProduction);
            console.log(`Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file.`)
        } catch (err: any) {
            if (err.code === 'EADDRINUSE') {
                console.error(`Port ${options.port} is in use. Try running on a different port.`)
            } else {
                console.error("Here is the problem", err.message);
            }
            process.exit(1);
        }
    });