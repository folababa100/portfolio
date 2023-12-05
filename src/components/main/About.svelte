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
            I am a full stack engineer with the MERN stack and a Cloud Expert with 3 advanced certifications in AWS. I
            have more than 6 years of experience designing and developing scalable and reliable enterprise solutions
            with focus on quality, reliability, and performance in various sectors such as Cloud Security, Real Estate,
            E-Commerce, Card Management, Consulting and Data Management. Although my past roles have predominantly been
            frontend-focused, over the years, I have mastered full-stack software engineering best and modern practices
            such as TDD, Clean Coding, OOP, Cloud Native, CI/CD, Solution and Architectural Design, and Observability.
          {:else}
            I am currently working full time as a frontend web developer and I am open to offers.
            <br/>
            <br/>
            <a
              class="text-green hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1U-foqFEJRqO3PQT9jJTZWddqzAX0rrTX/view?usp=sharing"
            >
              Here is a link to my resume.
            </a>
          {/if}
        </p>
      </div>
    </div>
  </div>
</section>
