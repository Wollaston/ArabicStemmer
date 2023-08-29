<script lang="ts">
	async function get_root(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		await fetch('/api/get_root', {
			method: 'POST',
			body: data
		});
	}
</script>

<form method="POST" action="/api/get_root" class="flex gap-2">
	<input
		on:submit|preventDefault={get_root}
		name="word"
		type="text"
		placeholder="Enter Arabic Word"
		class="input input-bordered w-full max-w-xs"
	/>
	<button class="btn btn-primary">Submit</button>
</form>
