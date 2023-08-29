<script lang="ts">
	interface Root {
		word_root: string;
	}

	let word_root: Root = {
		word_root: ''
	};

	async function get_root(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		const response = await fetch('/api/get_root', {
			method: 'POST',
			body: data
		});
		word_root = await response.json();
		console.log(word_root.word_root);
	}
</script>

<div class="flex flex-col justify-center items-center gap-4">
	<h1 class="text-2xl text-primary-content m-4">Enter an Arabic Word to Get its Stem!</h1>
	<form method="POST" on:submit|preventDefault={get_root} action="/api/get_root" class="flex gap-2">
		<input
			name="word"
			type="text"
			placeholder="Enter Arabic Word"
			class="input input-bordered w-full max-w-xs"
		/>
		<button class="btn btn-primary">Submit</button>
	</form>
	<h3>Word Root: {word_root.word_root}</h3>
</div>
