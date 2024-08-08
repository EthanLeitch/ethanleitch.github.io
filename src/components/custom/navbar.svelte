<script lang="ts">
    import { ModeWatcher } from "mode-watcher";
    import ModeToggle from "$lib/components/custom/iconbutton/mode-toggle.svelte";
    import { Separator } from "$lib/components/ui/separator";

    // Light and dark theme
   	const isBrowser = typeof localStorage !== 'undefined';
	const getThemePreference = () => {
	  if (isBrowser && localStorage.getItem('theme')) {
		return localStorage.getItem('theme');
	  }
	  return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark' : 'light';
	};

	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

	if (isBrowser) {
	  const observer = new MutationObserver(() => {
		const isDark = document.documentElement.classList.contains('dark');
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	  });
	  observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['class']
	  });
	}
</script>

<nav class="background shadow-md p-5">
	<div class="container mx-auto flex justify-between items-center">
		<!-- Home link -->
		<div class="flex h-5 items-center space-x-4 text-sm">
			<a href="/" class="text-lg font-semibold">Home</a>
			<Separator orientation="vertical" />
			<a href="/sitemap" class="text-lg font-semibold">Sitemap</a>
		</div>

		<!-- Theme button -->
		<ModeWatcher />
		<ModeToggle />
	</div>
</nav>
