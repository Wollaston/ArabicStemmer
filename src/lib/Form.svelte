<script lang="ts">
	import { wordData } from '../stores';
	async function get_root(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		const response = await fetch('/api/get_root', {
			method: 'POST',
			body: data
		});
		const result: WordData = JSON.parse(await response.json());
		wordData.set(result);
	}
</script>

<form method="POST" on:submit|preventDefault={get_root} action="/api/get_root" class="flex gap-2">
	<input
		name="word"
		type="text"
		placeholder="Enter Arabic Word"
		class="input input-bordered w-full max-w-xs"
	/>
	<button class="btn btn-accent">Submit</button>
</form>
