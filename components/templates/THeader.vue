<template>
  <header class="relative top-0 overflow-hidden bg-white dark:bg-black dark:text-white lg:max-h-90 2xl:max-h-240 lg:min-h-216 lg:h-screen">
    <div class="px-6">
      <div class="container relative z-80">
        <div class="absolute right-0 z-40 top-6"><a href="#" class="flex items-center justify-center p-2" data-toggle-dark-mode>
          <svg class="hidden dark:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
          </svg>
          <svg class="dark:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </a></div>
      </div>
    </div>

    <div class="absolute lg:fixed 5xl:absolute top-20 lg:top-28 left-1/5 lg:left-1/3 w-18 h-18 transform-z">
      <div class="absolute -translate-x-1/2 top-2 perspective backface-visibility-hidden">
        <div class="border-b outline-clean border-light dark:border-line w-max animation-duration-long animation-iteration-infinite animation-rotate-0 animation-timing-linear will-change-transform"></div>
      </div>
      <div class="absolute -translate-x-1/2">
        <div class="border-b outline-clean border-light dark:border-line w-max animation-duration-long animation-iteration-infinite animation-rotate-1 animation-timing-linear will-change-transform"></div>
      </div>
      <div class="absolute -translate-x-1/2">
        <div class="border-b outline-clean border-light dark:border-line w-max animation-duration-long-2 animation-iteration-infinite animation-rotate-2 animation-timing-linear will-change-transform"></div>
      </div>
      <div class="absolute -translate-x-1/2 top-12">
        <div class="border-b outline-clean border-light dark:border-line w-max animation-duration-long-3 animation-iteration-infinite animation-rotate-3 animation-timing-linear will-change-transform"></div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full px-8 pt-12 pb-20 text-center lg:py-32 lg:fixed 5xl:relative transform-z will-change-transform backface-visibility-hidden">
      <img alt="NetrixOne" title="NetrixOne" src="~/assets/misc/logo.svg"/>

      <div class="relative z-20 px-4 py-4 mb-8 text-center lg:mb-32 md:px-6 lg:px-8 transition-color">
        <h1 class="max-w-4xl mb-2 text-base font-bold lg:text-xl">NetrixOne is a group of independent IT professionals spanning multiple areas of expertise</h1>
        <p class="max-w-4xl mx-auto text-gray-200 dark:text-gray-100 text-tiny transition-color">
          We focus on software development that is tailored to fit even the most complex and sometimes very niche demands of our customers (like network flow analysis or mounting a spectral camera to a drone 🚁😎👌). We have years of
          experience with big data analysis and interactive data visualization. For our clients we also offer developer-oriented consulting and training sessions.
        </p>
      </div>
      <div class="container relative flex flex-col w-full md:flex-row lg:w-auto">
        <div class="relative px-8 mb-4 lg:pl-0 md:w-1/2">
          <a
              href="#discover-more"
              data-smooth-scroll
              class="relative z-20 inline-flex justify-center w-full px-4 py-3 text-blue-500 whitespace-no-wrap bg-white border-2 border-blue-500 rounded-full lg:px-8 lg:py-2 dark:bg-black hover:text-blue-700 hover:border-blue-700 transition-button font-weight min-w-40"
          >
            Discover more
          </a>
          <div class="absolute left-0 w-20 -translate-y-1/2 border border-blue-500 top-1/2 lg:left-auto lg:right-0"></div>
          <div class="absolute left-0 h-screen border border-blue-500 top-1/2 lg:left-auto lg:right-0"></div>
        </div>
        <div class="px-8 lg:pr-0 md:w-1/2">
          <a
              href="#blog"
              data-smooth-scroll
              class="relative z-20 inline-flex justify-center w-full px-4 py-3 text-pink-500 whitespace-no-wrap bg-white border-2 border-pink-500 rounded-full lg:px-8 lg:py-2 dark:bg-black hover:text-pink-700 hover:border-pink-700 transition-button font-weight min-w-40"
          >
            Our blog
          </a>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 w-full pointer-events-none lg:h-64">
      <div class="absolute bottom-0 right-0 w-0 border-transparent border-b-gray-80 dark:border-b-gray-700 border-r-transparent border-b-10 lg:border-b-32 border-l-screen-30 lg:border-l-screen-27"></div>
      <div class="absolute bottom-0 right-0 z-20 w-0 border-b-8 border-transparent border-b-gray-50 dark:border-b-gray-900 border-r-transparent lg:border-b-32 border-l-screen-24"></div>
      <div class="absolute bottom-0 w-0 border-transparent border-b-gray-80 dark:border-b-gray-700 border-r-transparent border-b-14 lg:border-b-32 border-r-screen lg:border-r-screen-90"></div>
      <div class="absolute bottom-0 z-20 w-0 border-transparent border-b-gray-50 dark:border-b-gray-900 border-r-transparent border-b-10 lg:border-b-20 border-r-screen-83 lg:border-r-screen-85"></div>
    </div>
  </header>
</template>
