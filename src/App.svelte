<script>
  import { onMount } from "svelte";
  import Navbar from "./components/navbar/index.svelte";
  import Main from "./components/main/index.svelte";
  import "./css/navbar.css";
  import "./css/switch.css";
  import "./css/animate.css";
  import "./css/darkmode.css";

  let lightMode = true;
  let show = false;

  onMount(() => {
    const localLightMode = localStorage.getItem("lightMode");
    if (localLightMode) {
      lightMode = JSON.parse(localLightMode);
      if (lightMode === false) {
        document.body.classList.add("dark-mode");
        lightMode = false;
      }
    }

    function activateDarkMode() {
      document.body.classList.add("dark-mode");
      lightMode = false;
      localStorage.setItem("lightMode", lightMode);
    }

    function activateLightMode() {
      document.body.classList.remove("dark-mode");
      lightMode = true;
      localStorage.setItem("lightMode", lightMode);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (e.matches) {
          activateDarkMode();
        } else {
          activateLightMode();
        }
      });
    setTimeout(() => {
      show = true;
    }, 3200);
  });

  function onToggleMode() {
    lightMode = !lightMode;
    localStorage.setItem("lightMode", lightMode);
    document.body.classList.toggle("dark-mode");
  }
</script>

<div class="bg-platinum">
  {#if show}
    <div>
      <Navbar on:toggle={onToggleMode} {lightMode} />
      <main class="main-site">
        <Main {lightMode} />
      </main>
    </div>
  {/if}
  {#if !show}
    <div
      class="h-screen w-screen absolute top-0 left-0 overflow-x-hidden bg-platinum"
    >
      <div class="h-full w-full justify-center items-center flex animate__animated animate__slideOutRight animate__slower animate__delay-2s">
        {#if lightMode}
          <video width="500" height="500" class="h-40 w-40" alt="My Logo" autoplay="true" muted="true">
            <source src="/images/f.mp4" type="video/mp4">
          </video>
        {:else}
          <video width="500" height="500" class="h-40 w-40" alt="My Logo" autoplay="true" muted="true">
            <source src="/images/fWhite.mp4" type="video/mp4">
          </video>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
