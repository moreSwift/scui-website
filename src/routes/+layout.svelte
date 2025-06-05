<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import { injectAnalytics } from '@vercel/analytics/sveltekit'

	injectAnalytics();

	let { children } = $props();
</script>

<ModeWatcher />
{@render children()}
