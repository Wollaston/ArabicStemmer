import { spawn } from 'child_process';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData();
	const word = data.get('word')?.toString();
	let word_root = '';
	if (word) {
		const child = spawn('python3', ['src/lib/server/root.py', word]);
		child.stdout.on('data', (data: string) => {
			console.log(`stdout:\n${data}`);
			word_root = data.toString();
		});

		child.stderr.on('data', (data: string) => {
			console.error(`stderr: ${data}`);
		});

		child.on('error', (error: string) => {
			console.error(`error: ${error}`);
		});

		child.on('close', (code: string) => {
			console.log(`child process exited with code ${code}`);
			console.log('Child Process:', word_root);
		});
	}
	const sleep = (ms: number | undefined) => new Promise((r) => setTimeout(r, ms));
	await sleep(1000);
	return json({
		word_root: word_root
	});
};

export const GET: RequestHandler = () => {
	console.log('GET Request');
	return new Response('Get Request');
};
