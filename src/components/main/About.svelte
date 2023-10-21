<script>
  let personalMode = true;

  const onChange = () => {
    personalMode = !personalMode;
  };
</script>

<section id="about">
  <div class="py-10 pb-20">
    <div class="reveal-elem">
      <h2 class="mb-12 text-5xl font-bold item-underline extended-line">
        About me
      </h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="relative mb-8 lg:mb-0">
        <picture>
          <source srcset="/images/folababa.webp" type="image/webp"/>
          <img class="h-full w-full sm:w-96 mx-auto lg:mx-0" src="/images/folababa.jpg" alt="Personal"/>
        </picture>
      </div>
      <div class="w-full mx-auto">
        <label
          for="switch"
          class="cursor-pointer flex mb-8 items-start sm:items-center justify-between flex-col sm:flex-row relative"
        >
          <div
            class={`roboto-slab text-xl md:text-2xl text-mode xl:text-3xl ${
              personalMode ? "text-green" : ""
            }`}
          >
            Personal Mode
          </div>
          <div class="flex items-center absolute sm:static label-div">
            <input on:change={onChange} type="checkbox" id="switch"/>
            <div class="label"/>
          </div>
          <div
            class={`roboto-slab text-xl md:text-2xl mt-4 sm:mt-0 text-mode xl:text-3xl ${
              !personalMode ? "text-green" : ""
            }`}
          >
            Recruiter Mode
          </div>
        </label>
        <p class="mb-8 text-gray">
          {#if personalMode}
            I am a self-taught front-end web developer. With a passion for building web applications that are
            user-friendly and accessible. I also have extensive knowledge of cloud technologies like AWS.
            I am a certified Solutions Architect, Developer Associate and Database Specialist.
            <br/>
            <br/>
            I am also a student of the University of London Goldsmiths studying
            Computer Science. I am fluent in English and I am currently learning German.
          {:else}
            I am currently working full time as a frontend web developer and I am open to offers.
            <br/>
            <br/>
            <a
              class="text-green hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1wlRJzU1YTXsfqunhtigcDrcFeRaVQY5r/view?usp=sharing"
            >
              Here is a link to my resume.
            </a>
          {/if}
        </p>
      </div>
    </div>
  </div>
</section>
