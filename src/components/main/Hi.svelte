<script>
  export let lightMode;
</script>

<section id="hi">
  <div class="pt-12 sm:pt-20 pb-10">
    <div>
      <h1 class="text-4xl lg:text-5xl mb-8 tracking-wide title-h1">
				<span>
					Hi, My name is Adefolarin Adekunbi.
				</span>
        <br class="hidden sm:block"/>
        <span>
					I'm a <span class="text-orange extended-line orange-underline item-underline">Full stack engineer.</span>
				</span>
        <br class="hidden sm:block"/>
        <span>with more than 6 years of experience.</span>
        <br class="hidden sm:block"/>
        <span>I am currently located in Cottbus, Germany. </span>
      </h1>
      <div class="flex items-center mb-16 justify-between">
        <div class="flex items-center">
          <a
            class="mr-4"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/folababa100"
          >
            <ion-icon class="text-xl social-icon" name="logo-github"/>
          </a>
          <a
            target="_blank"
            class="mr-4"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/folababa/"
          >
            <ion-icon class="text-xl social-icon" name="logo-linkedin"/>
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.upwork.com/freelancers/~01669dab45a4384101"
          >
            <img class="h-6 social-icon" src={lightMode ? "/images/upwork.svg" : "/images/upwork-dark.svg"} alt="Upwork logo" />
          </a>
        </div>
      </div>
      <hr class="border-site"/>
    </div>
  </div>
</section>
