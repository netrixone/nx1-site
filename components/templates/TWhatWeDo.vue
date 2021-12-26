<template>
  <div><h2 class="mb-8 text-base font-bold text-black uppercase lg:mb-16 lg:mx-auto dark:text-white font-arvo md:text-lg lg:text-xl lg:text-center">Here's what we do</h2>
    <div class="container">
      <div class="relative flex flex-col pl-8 mb-8 text-white lg:pl-0">
        <article class="self-end w-full transition-all lg:pl-12 lg:w-1/2">
          <div class="absolute left-0 z-20 w-6 h-6 -translate-x-1/2 border-2 border-blue-500 rounded-full lg:left-1/2 bg-gray-50 dark:bg-gray-900 lg:w-8 lg:h-8"></div>
          <observe class="transition-all transition-750" inactive-class="lg:opacity-0 lg:translate-x-100">
            <h3 class="mb-4 font-bold text-blue-500 uppercase font-arvo text:base lg:text-lg">Consulting</h3>
            <ul class="ml-4 text-sm text-gray-200 list lg:text-tiny dark:text-gray-100">
              <li class="relative mb-4">developer-focused, solve real-world, everyday problems</li>
              <li class="relative mb-4">introduce and review latest technologies and trends (Kong, Zeit, CloudFlare, PDF-Chromium, NWJS/Electron, Anychart, Geolocation, 2D DB index, …)</li>
              <li class="relative mb-4">help configure proper CI (custom Gitlab runners, docker-compose, docker performance and security tips, …)</li>
              <li class="relative mb-4">code review (focus on code quality and security)</li>
              <li class="relative mb-4">help establish code review company culture (why, how to write reviews, what to look for, …)</li>
              <li class="relative mb-4">server and application monitoring (Zabbix, VMWare)</li>
              <li class="relative mb-4">server and network consulting (backups, bottlenecks, hardware, virtualisation, licensing, …)</li>
              <li class="relative mb-4">system architecture design (API design, monolith breakdown)</li>
            </ul>
          </observe>
        </article>
        <article class="w-full transition-all lg:pr-12 lg:w-1/2">
          <div class="absolute left-0 z-20 w-6 h-6 -translate-x-1/2 border-2 border-blue-500 rounded-full lg:left-1/2 bg-gray-50 dark:bg-gray-900 lg:w-8 lg:h-8"></div>
          <observe class="transition-all transition-750" inactive-class="lg:opacity-0 lg:-translate-x-100">
            <h3 class="mb-4 font-bold text-blue-500 uppercase font-arvo text:base lg:text-lg lg:text-right">Development</h3>
            <ul class="ml-4 text-sm text-gray-200 list lg:text-tiny dark:text-gray-100">
              <li class="relative mb-4">complex data processing (like maintaining a huge GeoIP database with historical data and blazing🔥 fast lookups)</li>
              <li class="relative mb-4">data visualization (that is actually comprehensible to the user)</li>
              <li class="relative mb-4">web/desktop app development (we enjoy building beautiful desktop apps in TypeScript/Node.js/Vue.js - that's not your grandma's UI)</li>
              <li class="relative mb-4">cloud service integration (deploy your apps easily to AWS S3, integrate your business with SAP or connect with a payment gateway)</li>
            </ul>
          </observe>
        </article>
        <article class="self-end w-full lg:pl-12 lg:w-1/2">
          <div class="absolute left-0 z-20 w-6 h-6 -translate-x-1/2 border-2 border-blue-500 rounded-full lg:left-1/2 bg-gray-50 dark:bg-gray-900 lg:w-8 lg:h-8"></div>
          <observe class="transition-all transition-750" inactive-class="lg:opacity-0 lg:translate-x-100">
            <h3 class="mb-4 font-bold text-blue-500 uppercase font-arvo text:base lg:text-lg">
              Testing</h3>
            <ul class="ml-4 text-sm text-gray-200 list lg:text-tiny dark:text-gray-100">
              <li class="relative mb-4">performance testing (on-demand tests are great, but we recommend regular checks with performance assertions)</li>
              <li class="relative mb-4">security audits (let’s hit that new website, analyze your code, sift through the transitive dependencies and check for security issues in your business workflow)</li>
            </ul>
          </observe>
        </article>
        <article class="w-full transition-all lg:pr-12 lg:w-1/2">
          <div class="absolute left-0 z-20 w-6 h-6 -translate-x-1/2 border-2 border-blue-500 rounded-full lg:left-1/2 bg-gray-50 dark:bg-gray-900 lg:w-8 lg:h-8"></div>
          <observe class="transition-all transition-750" inactive-class="lg:opacity-0 lg:-translate-x-100">
            <h3 class="mb-4 font-bold text-blue-500 uppercase font-arvo text:base lg:text-lg lg:text-right">
              Training</h3>
            <ul class="ml-4 text-sm text-gray-200 list lg:text-tiny dark:text-gray-100">
              <li class="relative mb-4">[Programming] PHP: how to design complex application</li>
              <li class="relative mb-4">[Programming] Nette: how to create first-class applications</li>
              <li class="relative mb-4">[Programming] JavaSript: prototype with Vue.js + Vuex + TypeScript</li>
              <li class="relative mb-4">[Programming] Java: Spring Integration deep dive (logging, websockets, stateless retry, performance)</li>
              <li class="relative mb-4">[Programming] testing (web) applications effectively: unit/integration/smoke tests</li>
              <li class="relative mb-4">[Programming] writing secure code</li>
              <li class="relative mb-4">[Tooling] RabbitMQ: performance HiPE (RabbitMQ best practice, performance tips, deploying RabbitMQ with HiPE)</li>
              <li class="relative mb-4">[Tooling] Wireshark: tips&tricks for productivity (advanced filters, custom columns, payload carving, working with console)</li>
            </ul>
          </observe>
        </article>
        <div class="absolute top-0 bottom-0 left-0 -translate-x-1/2 border border-blue-500 -mb-128 lg:left-1/2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Observe from "~/components/atoms/Observe";

export default {
  components: { Observe }
}
</script>
