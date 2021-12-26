<template>
  <div class="container">
    <div class="absolute top-0 h-32 border border-pink-500 lg:left-1/2 lg:-translate-x-1/2 lg:h-40">
      <div class="absolute w-6 h-6 -translate-x-1/2 bg-white border-2 border-pink-500 rounded-full top-full left-1/2 lg:w-8 lg:h-8 dark:bg-black"></div>
    </div>

    <h2 class="px-6 mb-8 text-base font-bold text-black uppercase lg:px-0 dark:text-white lg:text-xl lg:text-center font-arvo">From our blog</h2>

    <div class="flex flex-wrap justify-center px-6 -mx-12 lg:px-0">
      <article class="w-full px-12 mb-6 lg:mb-4 lg:w-1/3">
        <h3 class="mb-4 text-base font-bold uppercase lg:text-lg font-arvo">
          <a href="https://dev.to/nx1/endpoint-fingerprinting-11op" class="text-pink-500 hover:text-pink-700 focus:text-pink-700 transition-color">SMB: endpoint fingerprinting</a>
        </h3>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">2020-03-02</p>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">This time let's focus on messages that carry hints about the connected endpoints, which can be used to infer knowledge about the client and server (e.g. OS version). This process is called fingerprinting.</p>
        <a
            href="https://dev.to/nx1/endpoint-fingerprinting-11op"
            class="relative inline-flex justify-center px-6 py-2 text-sm text-pink-500 transition-all border-2 border-pink-500 rounded-full md:px-8 lg:text-base bg-gray-50 dark:bg-black hover:text-pink-700 hover:border-pink-700 font-weight"
        >
          Read more
        </a>
      </article>

      <article class="w-full px-12 mb-6 lg:mb-4 lg:w-1/3">
        <h3 class="mb-4 text-base font-bold uppercase lg:text-lg font-arvo">
          <a href="https://dev.to/nx1/smb-metadata-in-rpc-468" class="text-pink-500 hover:text-pink-700 focus:text-pink-700 transition-color">SMB: metadata in RPC</a>
        </h3>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">2020-01-22</p>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">This is another article in the series on metadata for network forensics. Today I am going to briefly describe Remote Procedure Calls over SMB.</p>
        <a
            href="https://dev.to/nx1/smb-metadata-in-rpc-468"
            class="relative inline-flex justify-center px-6 py-2 text-sm text-pink-500 transition-all border-2 border-pink-500 rounded-full md:px-8 lg:text-base bg-gray-50 dark:bg-black hover:text-pink-700 hover:border-pink-700 font-weight"
        >
          Read more
        </a>
      </article>

      <article class="w-full px-12 mb-6 lg:mb-4 lg:w-1/3">
        <h3 class="mb-4 text-base font-bold text-pink-500 uppercase lg:text-lg font-arvo">
          <a href="https://dev.to/nx1/smb-file-metadata-and-metadata-files-228h" class="text-pink-500 hover:text-pink-700 focus:text-pink-700 transition-color">SMB: file metadata and metadata files</a>
        </h3>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">2020-01-08</p>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">This article tackles with SMB protocol and metadata hiding in it, often in plain sight. The usual evidence is that files were transferred from A to B and metadata are often ignored because of the juicy payloads.</p>
        <a
            href="https://dev.to/nx1/smb-file-metadata-and-metadata-files-228h"
            class="relative inline-flex justify-center px-6 py-2 text-sm text-pink-500 transition-all border-2 border-pink-500 rounded-full md:px-8 lg:text-base bg-gray-50 dark:bg-black hover:text-pink-700 hover:border-pink-700 font-weight"
        >
          Read more
        </a>
      </article>

      <article class="w-full px-12 mb-6 lg:mb-4 lg:w-1/3">
        <h3 class="mb-4 text-base font-bold text-pink-500 uppercase lg:text-lg font-arvo">
          <a href="https://dev.to/nx1/deploy-static-frontend-php-files-using-zeit-now-mg" class="text-pink-500 hover:text-pink-700 focus:text-pink-700 transition-color">Deploy Static Frontend + PHP Files Using ZEIT Now</a>
        </h3>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">2019-12-16</p>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">How to take advantage of static frontend but with dynamic backend written in PHP? Since November 2019 it's so simple with ZEIT Now.</p>
        <a
            href="https://dev.to/nx1/deploy-static-frontend-php-files-using-zeit-now-mg"
            class="relative inline-flex justify-center px-6 py-2 text-sm text-pink-500 transition-all border-2 border-pink-500 rounded-full md:px-8 lg:text-base bg-gray-50 dark:bg-black hover:text-pink-700 hover:border-pink-700 font-weight"
        >
          Read more
        </a>
      </article>

      <article class="w-full px-12 mb-6 lg:mb-4 lg:w-1/3">
        <h3 class="mb-4 text-base font-bold text-pink-500 uppercase lg:text-lg font-arvo">
          <a href="https://dev.to/nx1/bleeding-edge-php-on-zeit-now-565g" class="text-pink-500 hover:text-pink-700 focus:text-pink-700 transition-color"> Bleeding Edge PHP on ZEIT Now</a>
        </h3>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">2019-07-19</p>
        <p class="mb-2 text-sm text-gray-200 lg:mb-4 lg:text-tiny dark:text-gray-100">Today I would like to show you ZEIT Now platform. Well, you've probably heard about it. But, I have some good news for PHP devs. Since June (06/2019) I am working on the enhanced PHP builders for ZEIT Now.</p>
        <a
            href="https://dev.to/nx1/bleeding-edge-php-on-zeit-now-565g"
            class="relative inline-flex justify-center px-6 py-2 text-sm text-pink-500 transition-all border-2 border-pink-500 rounded-full md:px-8 lg:text-base bg-gray-50 dark:bg-black hover:text-pink-700 hover:border-pink-700 font-weight"
        >
          Read more
        </a>
      </article>
    </div>
  </div>
</template>
