<template>
  <footer class="relative z-10 px-8 py-10 bg-white dark:bg-gray-900">
    <div class="container flex flex-wrap justify-center">
      <div class="w-full"><h3 class="w-full mb-2 text-base font-bold text-blue-500 uppercase font-arvo lg:text-lg">Contact</h3></div>
      <div class="w-1/2"></div>
    </div>
    <div class="container flex flex-col flex-wrap lg:flex-row lg:justify-between">
      <div class="flex-grow-0 flex-shrink">
        <p class="mb-6 text-xs text-gray-200 dark:text-gray-100 md:text-sm lg:text-base">
          <span class="text-base font-bold text-gray-200 dark:text-white lg:text-xl">NetrixOne s.r.o.</span>
          <br/>C 225690 vedená u Městského soudu v Praze
          <br/>U Svobodárny 1070, Libeň, 190 03 Praha 9
          <br/>IČO (Company registration number): 28804686<br/>DIČ (VAT ID): CZ28804686<br/>
        </p>
        <form action="https://formspree.io/xjvvbgqw" method="POST" class="flex flex-col">
          <div class="flex flex-col mb-4" data-float-label>
            <label class="mb-1 text-xs font-semibold lg:text-sm dark:text-white">Your email:</label>
            <input type="email" name="_replyto" class="flex-auto p-2 px-3 leading-tight border border-gray-100 rounded focus:outline-none dark:text-gray-100 dark:bg-gray-900 dark:border-gray-600">
          </div>
          <div class="flex flex-col mb-4" data-float-label>
            <label class="mb-1 text-xs font-semibold lg:text-sm dark:text-white">Your message:</label>
            <textarea name="message" rows="3" class="flex-auto p-2 px-3 leading-tight border border-b border-gray-100 rounded focus:outline-none dark:text-gray-100 dark:bg-gray-900 dark:border-gray-600"></textarea>
          </div>
          <button type="submit" class="relative z-20 inline-flex self-center justify-center px-4 py-2 mb-4 text-blue-500 whitespace-no-wrap transition-all bg-white border-2 border-blue-500 rounded-full lg:mb-0 dark:bg-gray-900 lg:self-end hover:text-blue-700 hover:border-blue-700 font-weight min-w-40">Send</button>
        </form>
      </div>
      <div class="flex-1 mb-2 lg:mx-8">
        <h3 class="mb-2 text-lg font-bold dark:text-white">Wanna meet?</h3>
        <ul class="dark:text-white">
          <li class="mb-2">
            <a href="https://owasp.org/www-chapter-czech-republic/" class="dark:text-white underline dark-hover\:text-gray-100 transition-color">OWASP beers</a>
            <p class="text-sm">We like to hang out with other people who ❤️ security. This event happens every last Thursday in month and takes place in Radegastovna Perón, Praha 5 around 7 PM.</p>
          </li>
          <li class="mb-2">
            <a href="http://meetings.2600.cz" class="dark:text-white underline dark-hover\:text-gray-100 transition-color">2600 meetup</a>
            <p class="text-sm">Occasionally we attend a local meetup of the famous 2600 magazine (first Friday of the month). The atmosphere is friendly, the food's great and you can meet some really interesting people there.</p>
          </li>
          <li class="mb-2">
            <a href="https://www.meetup.com/ngParty/" class="dark:text-white underline dark-hover\:text-gray-100 transition-color">ngParty</a>
            <p class="text-sm">NG standing for Next Generation, this meetup offers interesting talks about the latest technologies. With primary focus on JavaScript and Typescript there have also been great talks about security, Docker and other stuff.</p>
          </li>
        </ul>
      </div>
      <div class="flex flex-grow-0 flex-shrink text-gray-500">
        <a class="mr-2 hover:text-gray-800 dark-hover\:text-white focus:text-white transition-color" href="https://twitter.com/stuchl4n3k/lists/nx1" title="NX1 on Twitter">
          <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26">
            <path
                d="M32,9.1a13.956,13.956,0,0,1-3.75,1.05,6.611,6.611,0,0,0,2.9-3.65A13.028,13.028,0,0,1,27,8.1,6.687,6.687,0,0,0,22.15,6a6.54,6.54,0,0,0-6.55,6.55,7.631,7.631,0,0,0,.15,1.5A18.5,18.5,0,0,1,2.25,7.2a6.648,6.648,0,0,0-.9,3.3,6.481,6.481,0,0,0,2.9,5.45,6.975,6.975,0,0,1-2.95-.8v.1A6.554,6.554,0,0,0,6.55,21.7a6.724,6.724,0,0,1-1.75.25,10.526,10.526,0,0,1-1.25-.1A6.579,6.579,0,0,0,9.7,26.4a13.282,13.282,0,0,1-8.15,2.8A15.142,15.142,0,0,1,0,29.1,19.05,19.05,0,0,0,10.05,32c12.1,0,18.7-10,18.7-18.7v-.85A13.807,13.807,0,0,0,32,9.1Z"
                transform="translate(0 -6)"/>
          </svg>
        </a>
        <a class="mr-2 hover:text-gray-800 dark-hover\:text-white focus:text-white transition-color" href="https://dev.to/nx1" title="NX1 on Dev.to">
          <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 32 447.99999999999994 448">
            <path
                d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"/>
          </svg>
        </a>
        <a class="mx-2 hover:text-gray-800 dark-hover\:text-white focus:text-white transition-color" href="https://www.linkedin.com/company/netrixone/" title="NX1 on LinkedIn">
          <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="31.95" viewBox="0 0 32 31.95">
            <path
                d="M30.6,0H1.348A1.342,1.342,0,0,0,0,1.348v29.3a1.332,1.332,0,0,0,1.348,1.3h29.3A1.342,1.342,0,0,0,32,30.6V1.348A1.419,1.419,0,0,0,30.6,0ZM9.485,27.207H4.743V11.981H9.485ZM7.089,9.885A2.746,2.746,0,1,1,9.835,7.139,2.707,2.707,0,0,1,7.089,9.885ZM27.207,27.207H22.465V19.819c0-1.747-.05-4.044-2.446-4.044-2.446,0-2.846,1.947-2.846,3.894v7.538H12.431V11.981h4.543v2.1h.05a5.019,5.019,0,0,1,4.493-2.446c4.793,0,5.691,3.145,5.691,7.239Z"/>
          </svg>
        </a>
        <a class="ml-2 hover:text-gray-800 dark-hover\:text-white focus:text-white transition-color" href="https://github.com/netrixone" title="NX1 on Github">
          <svg aria-label="Github" viewBox="0 0 16 16" class="w-8 h-8 fill-current">
            <use xlink:href="#github"></use>
          </svg>
        </a>
      </div>
    </div>
    <svg class="octicon octicon-mark-github v-align-middle" style="width:0; height:0;" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
      <path id="github" fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
  </footer>
</template>
