<script>
  import { onMount, createEventDispatcher } from "svelte";
  import debounce from "lodash.debounce";
  import NavSidebar from "./NavSidebar.svelte";
  import ModeBtn from "./ModeBtn.svelte";
  export let lightMode;
  const dispatch = createEventDispatcher();

  let show = false;
  let showMobile = false;
  let location = 0;
  let mobile = false;
  let sections = [];
  let width;
  let scroll = false;
  let sectionsName = ["hi", "about", "experience", "work", "contact"];
  let moves = [-0, -30, -116.81, -218.22, -270.22];

  onMount(() => {
    width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    const scrollY = window.scrollY;

    window.addEventListener("resize", () => {
      width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      if (width <= 1024) {
        mobile = true;
      } else {
        mobile = false;
      }
    });

    if (width > 1024) {
      if (scrollY > 70) {
        scroll = true;
      } else {
        show = true;
        scroll = false;
      }

      document.addEventListener(
        "scroll",
        debounce(() => {
          document.querySelector(".alt-section").style.transition =
            "transform .3s ease";
          const scrollY = window.scrollY;

          for (let i of sectionsName) {
            sections.push(document.getElementById(i).offsetTop);
          }

          for (let i = sections.length - 1; i >= 0; i--) {
            if (scrollY >= sections[i]) {
              if (location) {
                document
                  .getElementById(`${sectionsName[location - 1]}-span`)
                  .classList.toggle("alt-section-span-active");
              }
              location = i + 1;
              if (location) {
                document
                  .querySelector(".alt-section__move")
                  .style.setProperty("--translate-move", moves[i] + "px");
                document
                  .getElementById(`${sectionsName[location - 1]}-span`)
                  .classList.toggle("alt-section-span-active");
              }
              break;
            }
          }
          if (scrollY > 70) {
            scroll = true;
            show = false;
          } else {
            scroll = false;
            show = true;
          }
          sections = [];
        }, 300)
      );
    } else {
      mobile = true;
    }
  });

  function onToggle() {
    show = !show;
  }

  function onToggleMobile() {
    showMobile = !showMobile;
    document.querySelector(".navmodal").classList.toggle("navmodal-closed");
  }

  function onToggleMode() {
    dispatch("toggle")
  }
</script>

<nav
  class={`px-4 sm:px-8 py-2 nav-underline sticky top-0 z-50 transition flex items-center ${
    !show && !mobile ? "border-opacity-0 bg-transparent nav-toggled" : ""
  }`}
  style="height: 66px"
>
  <div class="hidden lg:flex items-center w-full opacity-100 justify-between">
    <div class="relative">
      <div class={`logo ${scroll ? "logo-toggled" : ""}`}>
        <a href="/" class="text-2xl tracking-wider">
          <!-- folababa <span>🤓</span> -->
          {#if lightMode}
            <img src="/images/f.svg" class="h-10 w-10 social-icon" alt="My Logo" />
          {:else}
            <img src="/images/fWhite.svg" class="h-10 w-10 social-icon" alt="My Logo" />
          {/if}
        </a>
      </div>
      <div class="absolute top-0">
        <div
          class={`alt-section relative ${scroll ? "alt-section-toggled" : ""}`}
        >
          {#if location}
            <div
              class="w-10 h-10 rounded-full text-white text-lg flex items-center justify-center bg-red-400"
            >
              0{location}
            </div>
          {/if}
          <div class="alt-section__move">
            <div style="left: 13px;" class="alt-section__text absolute">
              <span id="hi-span" class="alt-section-span">Hi</span>
              <span id="about-span" class="alt-section-span">About me</span>
              <span id="experience-span" class="alt-section-span"
                >Experience</span
              >
              <span id="work-span" class="alt-section-span">Works</span>
              <span id="contact-span" class="alt-section-span">Contact me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <ul
        class={`flex items-center mr-5 ul-nav overflow-x-hidden ${
          show ? "ul-toggled" : ""
        }`}
        style={`visibility: ${show ? "visible" : "hidden"}`}
      >
        <li class="px-4">
          <a class="item-underline" href="#hi">
            <span class="text-sm text-gray-light">01.</span>
            Hi
          </a>
        </li>
        <li class="px-4">
          <a class="item-underline" href="#about">
            <span class="text-sm text-gray-light">02.</span>
            About me
          </a>
        </li>
        <li class="px-4">
          <a class="item-underline" href="#experience">
            <span class="text-sm text-gray-light">03.</span>
            Experience
          </a>
        </li>
        <li class="px-4">
          <a class="item-underline" href="#work">
            <span class="text-sm text-gray-light">04.</span>
            Works
          </a>
        </li>
        <li class="px-4">
          <a class="item-underline" href="#contact">
            <span class="text-sm text-gray-light">05.</span>
            Contact me
          </a>
        </li>
      </ul>
      <button
        class={`btn-toggle out-none mr-5 ${show ? "btn-toggle-show" : ""}`}
        aria-label="Navmodal toggle button"
        on:click={onToggle}
      >
        <div class="line-top" />
        <div class="line-middle" />
        <div class="line-bottom" />
      </button>
      <ModeBtn on:toggle={onToggleMode} {lightMode} />
    </div>
  </div>
  <ul class="flex w-full lg:hidden items-center opacity-100">
    <li class="mr-auto">
      <a href="/" class="text-2xl tracking-wider">
        <!-- folababa <span class="social-icon">🤓</span> -->
        {#if lightMode}
          <img src="/images/f.svg" class="h-10 w-10 social-icon" alt="My Logo" />
        {:else}
          <img src="/images/fWhite.svg" class="h-10 w-10 social-icon" alt="My Logo" />
        {/if}
      </a>
    </li>
    <li class="mr-3">
      <button
        class={`btn-toggle out-none ${showMobile ? "btn-toggle-show" : ""}`}
        aria-label="Navmodal toggle button"
        on:click={onToggleMobile}
      >
        <div class="line-top" />
        <div class="line-middle" />
        <div class="line-bottom" />
      </button>
    </li>
    <li>
      <ModeBtn on:toggle={onToggleMode} {lightMode} />
    </li>
  </ul>
  <NavSidebar on:toggle={onToggleMobile} />
</nav>
