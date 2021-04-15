<script>
	import Navbar from "./components/navbar/index.svelte";
	import Footer from "./components/footer/index.svelte";
	import Main from "./components/main/index.svelte";
	import "./css/navbar.css";
</script>

<div class="bg-platinum">
	<div class="mx-auto container px-4">
		<Navbar />
		<Main />
		<Footer />
	</div>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
