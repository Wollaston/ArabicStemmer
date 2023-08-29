import { spawn } from 'child_process';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData();
	const word = data.get('word')?.toString();
	if (word) {
		const child = spawn('python3', ['src/lib/server/root.py', word]);

		let data = '';
		for await (const chunk of child.stdout) {
			console.log('stdout chunk: ' + chunk);
			data += chunk;
		}
		let error = '';
		for await (const chunk of child.stderr) {
			console.error('stderr chunk: ' + chunk);
			error += chunk;
		}
		const exitCode = await new Promise((resolve) => {
			child.on('close', resolve);
		});

		if (exitCode) {
			throw new Error(`subprocess error exit ${exitCode}, ${error}`);
		}
		return json({
			word_root: data
		});
	} else {
		return json({
			word_root: 'ERROR'
		});
	}
};

export const GET: RequestHandler = () => {
	console.log('GET Request');
	return new Response('Get Request');
};
