import { writable, type Writable } from 'svelte/store';

export const wordData: Writable<WordData> = writable({
	isri_stem: '',
	isri_success: false,
	arl_stem: '',
	arl_success: false,
	arl2_stem: '',
	arl2_success: false
});
