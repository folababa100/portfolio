<script>
  export let lightMode;
</script>

<section id="work">
  <div class="pt-10 py-20">
    <div class="reveal-elem">
      <h2 class="mb-12 text-5xl font-bold item-underline extended-line">
        Works
      </h2>
    </div>
    <div class="mb-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="col-span-1">
          <div class="flex h-full items-center">
            <div>
              <h3 class="mb-8 text-3xl font-bold">Habita365</h3>
              <div
                class="p-6 mb-4 bg-green text-white relative rounded m-minus-r-4"
              >
                Habita365 is a brazilian platform where people can buy, sell and rent homes.
              </div>
              <div class="mb-4">
                <span class="mr-2">Expressjs</span>
                <span class="mr-2">Tailwindcss</span>
                <span class="mr-2">Reactjs</span>
                <span class="mr-2">MongoDB</span>
                <span class="mr-2">Nextjs</span>
              </div>
              <div>
                <a
                  href="https://www.habita365.com.br"
                  class="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/external.svg" alt="Open in another tab" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 lg:col-span-2">
          <div>
            <picture class="w-full h-full">
              <source srcset="/images/4.avif" type="image/avif" />
              <img src="/images/4.jpg" alt="Habita365" />
            </picture>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="col-span-1 lg:col-span-2">
          <div>
            <picture class="w-full h-full">
              <source srcset="/images/2.avif" type="image/avif" />
              <img src="/images/2.jpg" alt="Fotoflis" />
            </picture>
          </div>
        </div>
        <div class="col-span-1 order-first lg:order-1">
          <div class="flex h-full items-center">
            <div>
              <h3 class="mb-8 text-3xl font-bold">Fotoflis</h3>
              <div class="p-6 mb-4 bg-green text-white rounded m-minus-l-4">
                Fotoflis is a norwegian platform that convert customer pictures into wall
                tiles.
              </div>
              <div class="mb-4">
                <span class="mr-2">Expressjs</span>
                <span class="mr-2">Tailwindcss</span>
                <span class="mr-2">Reactjs</span>
                <span class="mr-2">MongoDB</span>
                <span class="mr-2">Nextjs</span>
              </div>
              <div>
                <a
                  href="https://fotoflis.no"
                  class="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/external.svg" alt="Open in another tab" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="col-span-1">
          <div class="flex h-full items-center">
            <div>
              <h3 class="mb-8 text-3xl font-bold">My portfolio</h3>
              <div class="p-6 mb-4 bg-green text-white relative rounded m-minus-r-4">
                My very porfolio which has a lot of information about me. Also has a 100% score in 3 categories on chrome lighthouse.
              </div>
              <div class="mb-4">
                <span class="mr-2">Svelte</span>
                <span class="mr-2">Tailwindcss</span>
                <span class="mr-2">Reactjs</span>
                <!-- <span class="mr-2">MongoDB</span>
										<span class="mr-2">Nextjs</span> -->
              </div>
              <div>
                <a
                  href="https://folababa.dev"
                  class="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/external.svg" alt="Open in another tab" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 lg:col-span-2">
          <div>
            <picture class="w-full h-full">
              <source srcset={lightMode ? "/images/3.avif" : "/images/3White.avif"} type="image/avif" />
              <img src={lightMode ? "/images/3.jpg" : "/images/3White.jpg"} alt="Folababa website" />
            </picture>
          </div>
        </div>
      </div>
    </div>
    <!-- </SwiperSlide>
		</Swiper> -->
  </div>
</section>
