<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
      <div>
        <h4 class="text-lg 3xl:text-xl font-semibold">
          <span class="block">Creativity </span>
          <span class="block">& Brand Experience </span>
          <span class="block">Reimagitned!</span>
        </h4>

        <div class="main-logo text-xxxs tracking-widest space-x-1 flex items-start justify-center md:justify-start font-medium">
            <nuxt-link to="/">
                <AssetsLogo options="w-20 h-20"/>
            </nuxt-link>
        </div>
        <!-- Logo -->
      </div>
      <!-- column -->

      <div>
        <h4 class="text-lg 3xl:text-xl font-semibold">Our Subsidiaries</h4>
        <ul class="space-y-1 mt-2 text-sm md:text-sm 3xl:text-sm font-medium text-gray-800">
          <li>
            <nuxt-link to="/" class="theme-link">ICON Advertising LLC</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="theme-link">ICON Digital</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="theme-link">BrandingStudio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="theme-link">ICON Plus</nuxt-link>
          </li>
        </ul>
      </div>
      <!-- column -->

      <div>
        <h4 class="text-lg 3xl:text-xl font-semibold">Headquarters</h4>
        <p class="mt-2 text-sm md:text-sm 3xl:text-sm font-medium text-gray-800">
          <span class="block">Block A, Office 301</span>
          <span class="block">Metha Plaza Building</span>
          <span class="block">Oud Metha, Dubai</span>
          <span class="block">United Arab Emirates.</span>
        </p>
      </div>
      <!-- column -->

      <div class="space-y-5">
        <div class="space-y-2">
          <h4 class="text-lg 3xl:text-xl font-semibold">Contact Us</h4>
          <p class="mt-2 text-sm md:text-sm 3xl:text-sm font-medium text-gray-800">
            <span class="block">Let's talk about your goals!</span>
            <a href="mailto:info@icon-ad.com" class="theme-link">info@icon-ad.com</a>
            <br>
            <a href="tel:+97142636550" class="theme-link">+971 4 263 6550</a>
          </p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg 3xl:text-xl font-semibold">Follow us</h4>
          <p class="mt-2 text-sm md:text-sm 3xl:text-sm font-medium text-gray-800">
            <span class="block">We post amazing</span>
            <span class="block">content on our platforms</span>
          </p>
          <ul class="space-x-1 mt-2 text-sm md:text-sm 3xl:text-sm font-medium text-gray-800 flex items-center justify-center md:justify-start">
            <li>
              <a
                class="hover:bg-theme-sky-dark transition-all cursor-pointer inline-block p-2 hover:text-white"
                href="https://www.facebook.com/icon.creativeanddigital"
                target="_blank"
                rel="noreferrer"
              >
                <AssetsFacebook options="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                class="hover:bg-theme-sky-dark transition-all cursor-pointer inline-block p-2 hover:text-white"
                href="https://www.linkedin.com/company/icon-advertising-&-design-fz-llc/"
                target="_blank"
                rel="noreferrer"
              >
                <AssetsLinkedIn options="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                class="hover:bg-theme-sky-dark transition-all cursor-pointer inline-block p-2 hover:text-white"
                href="https://vimeo.com/user20802083"
                target="_blank"
                rel="noreferrer"
              >
                <AssetsVimeo options="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                class="hover:bg-theme-sky-dark transition-all cursor-pointer inline-block p-2 hover:text-white"
                href="https://www.behance.net/icon-ad"
                target="_blank"
                rel="noreferrer"
              >
                <AssetsBehance options="w-5 h-5" />
              </a>
            </li>
            <li>
            <a
              class="hover:bg-theme-sky-dark transition-all cursor-pointer inline-block p-2 hover:text-white"
              href="https://www.pinterest.com/iconadvertising"
              target="_blank"
              rel="noreferrer"
            >
              <AssetsPinterest options="w-5 h-5" />
            </a>
          </li>
          </ul>
        </div>
      </div>
      <!-- column -->

    </div>

    <hr class="h-1 bg-theme-gray-dark my-10" />

    <div class="copyright flex-col md:flex-row flex items-start md:items-center justify-between text-sm">
      <p class="order-last md:order-first">© All rights reserved by ICON™ Advertising LLC – Also known as ICON™ Media Solutions 2022. </p>
      <ul class="font-medium order-first md:order-last mb-2">
        <li>
          <nuxt-link to="/" class="theme-link"> Privacy & Policy </nuxt-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>
