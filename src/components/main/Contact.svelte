<script>
  export let lightMode;
</script>

<section id="contact">
  <div class="pb-20">
    <div class="reveal-elem">
      <h2 class="mb-12 text-5xl font-bold item-underline extended-line">Contact me</h2>
    </div>
    <div class="bg-white-box py-16 px-4 default-shadow">
      <div class="w-full md:w-9/12 lg:w-8/12 mx-auto">
        <div class="grid-cols-6 grid md:grid-cols-12 gap-12 items-center">
          <div class="col-span-6 md:col-span-4 lg:col-span-3">
            <p>
              You can reach me using any of my contact informations.
              <br/>
              Reply is very fast.
              <br/>
              Looking forward to hearing from you.
            </p>
          </div>
          <div class="col-span-6 md:col-span-8 lg:col-span-9">
            <div class="mb-10">
              <a
                class="mb-4 font-normal text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray item-underline extended-line"
                href="mailto:dekunbifola104@gmail.com"
              >
                dekunbifola104@gmail.com
              </a>
              <p class="text-gray mb-10">
                Feel free to contact me if you have any question!
              </p>
              <hr class="border-site"/>
            </div>
            <div class="mb-10">
              <a
                href="tel:+4915754287530"
                class="mb-4 font-normal text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray item-underline extended-line"
              >
                +4915754287530
              </a>
              <p class="text-gray mb-10">Let's talk!</p>
              <hr class="border-site"/>
            </div>
            <div class="flex items-center">
              <a
                target="_blank"
                rel="noreferrer noopener"
                class="mr-6 sm:m-8 md:mr-12 block out-none"
                href="https://github.com/folababa100"
              >
                <ion-icon class="text-xl social-icon" name="logo-github"/>
                <p class="text-base sm:text-lg md:text-xl font-light">Github</p>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                class="mr-6 sm:m-8 md:mr-12 block out-none"
                href="https://linkedin.com/in/adekunbi-adefolarin-887623186"
              >
                <ion-icon class="text-xl social-icon" name="logo-linkedin"/>
                <p class="text-base sm:text-lg md:text-xl font-light">LinkedIn</p>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                class="mr-6 sm:m-8 md:mr-12 block out-none"
                href="https://www.hackerrank.com/dekunbifola100?hr_r=1"
              >
                <img src={lightMode ? "/images/hackerrank.svg" : "/images/hackerrank-dark.svg"} class="h-5 mb-2" alt="Hackerrank logo" />
                <p class="text-base sm:text-lg md:text-xl font-light">Hackerrank</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
