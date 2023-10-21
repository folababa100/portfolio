<script>
	import Hi from "./Hi.svelte";
	import About from "./About.svelte";
	import Experience from "./Experience.svelte";
	import Work from "./Work.svelte";
	import Contact from "./Contact.svelte";

	export let lightMode;
</script>

<div class="mx-auto container px-4 lg:px-12 xl:px-16 2xl:px-20">
	<Hi {lightMode} />
	<About />
	<Experience />
	<Work {lightMode} />
	<Contact {lightMode} />
</div>
