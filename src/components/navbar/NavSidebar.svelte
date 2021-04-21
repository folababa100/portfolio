<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<div class="lg:hidden fixed navmodal navmodal-closed bg-transparent w-full flex">
  <div class="w-4/12 md:w-6/12 lg:w-8/12 h-full" on:click={() => dispatch("toggle")}></div>
  <div class="flex items-center bg-platinum w-8/12 md:w-6/12 lg:w-4/12 z-50 h-full">
    <ul
      class="w-full"
    >
      <li>
        <a class="item-underline p-4 block" href="#hi">
          Hi
        </a>
      </li>
      <li>
        <a class="item-underline p-4 block" href="#about">
          About me
        </a>
      </li>
      <li>
        <a class="item-underline p-4 block" href="#experience">
          Experience
        </a>
      </li>
      <li>
        <a class="item-underline p-4 block" href="#work">
          Works
        </a>
      </li>
      <li>
        <a class="item-underline p-4 block" href="#contact">
          Contact me
        </a>
      </li>
    </ul>
  </div>
</div>
