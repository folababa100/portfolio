<script>
	import { onMount } from "svelte";
	let show = false;
	onMount(() => {
		const options = {
			threadhold: 1.0,
			root: document
		};

		let observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// document.querySelector(".btn-resume").style.setProperty("--bg-resume-gradient", "linear-gradient(to right, #7fce99 0%, #e3ac2c 51%, #FCA311 100%)");
					// document.querySelector(".btn-resume").style.setProperty("--tw-ring-color", "#7fce99");
				} else {
					// document.querySelector(".btn-resume").style.setProperty("--bg-resume-gradient", "linear-gradient(to right, #FCA311 0%, #e3ac2c 51%, #7fce99 100%)");
					// document.querySelector(".btn-resume").style.setProperty("--tw-ring-color", "#FCA311");
				}
			});
		}, options);

		observer.observe(document.querySelector("main"));
	});


	function onToggle() {
		show = !show;
	}
</script>

<nav
	class="py-4 border-b border-gray-300 sticky top-0 bg-platinum z-50 flex items-center"
	style="height: 70px"
>
	<div class="hidden lg:flex items-center w-full justify-between">
		<div>
			<a href="/" class="text-2xl logo tracking-wider">folababa 🤓</a>
		</div>
		<ul class={`flex items-center ul-nav ${show ? "ul-toggled" : ""}`} style={`visibility: ${show ? "visible" : "hidden"}`}>
			<li class="px-4">
				<a class="nav-item-underline" href="#hi">
					<span class="text-sm text-gray-400">01.</span>
					Hi
				</a>
			</li>
			<li class="px-4">
				<a class="nav-item-underline" href="#about">
					<span class="text-sm text-gray-400">02.</span>
					About me
				</a>
			</li>
			<li class="px-4">
				<a class="nav-item-underline" href="#experience">
					<span class="text-sm text-gray-400">03.</span>
					Experience
				</a>
			</li>
			<li class="px-4">
				<a class="nav-item-underline" href="#skills">
					<span class="text-sm text-gray-400">04.</span>
					Skills
				</a>
			</li>
			<li class="px-4">
				<a class="nav-item-underline" href="#certifications">
					<span class="text-sm text-gray-400">04.</span>
					Certifications
				</a>
			</li>
			<li class="px-4">
				<a class="nav-item-underline" href="#contact">
					<span class="text-sm text-gray-400">05.</span>
					Contact Me
				</a>
			</li>
		</ul>
		<div>
			<button
				class={`btn-toggle out-none ${show ? "btn-toggle-show" : ""}`}
				on:click={onToggle}
			>
				<div class="line-top"></div>
				<div class="line-middle"></div>
				<div class="line-bottom"></div>
			</button>
		</div>
	</div>
	<ul class="flex w-full lg:hidden items-center justify-between">
		<li>
			<a href="/" class="text-2xl logo tracking-wider">folababa 🤓</a>
		</li>
		<li>
			<button
				class="flex items-center bg-transparent rounded-full transition appearance-none focus:ring-2 focus:ring-offset-2 out-none justify-center w-14 h-14"
			>
				<ion-icon class="text-3xl" name="menu-outline" />
			</button>
		</li>
	</ul>
</nav>
