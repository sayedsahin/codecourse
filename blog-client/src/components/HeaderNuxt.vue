<template>
	<div>
    <header class="d-header">
      <div class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6">
        <button aria-label="mobileMenu" class="flex items-center transition-colors duration-200 justify-center lg:hidden d-icon w-12 h-12 lg:hidden">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="h-6 w-6">
            <path d="M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        <div class="flex items-center flex-1 justify-center lg:justify-start">
          <a href="/" aria-label="homeLink" class="nuxt-link-active">
            <svg viewBox="0 0 221 65" fill="none" xmlns="http://www.w3.org/2000/svg" settings="[object Object]" class="h-8 mr-4 md:h-9 lg:mr-0">
              <path d="M76.333 20.5005H82.8185L96.5631 42.4764V20.5005H102.55V51.6393H96.1087L82.3198 29.7091V51.6393H76.333V20.5005Z" fill="currentColor"></path>
              <path
              d="M129.311 51.6393H123.732V48.1611C122.462 50.6089 119.877 51.9871 116.612 51.9871C111.441 51.9871 108.083 48.3393 108.083 43.0894V29.2178H113.662V41.9416C113.662 45.0111 115.568 47.1459 118.425 47.1459C121.555 47.1459 123.732 44.7437 123.732 41.4524V29.2178H129.311V51.6393Z"
              fill="currentColor"
              ></path>
              <path d="M148.724 51.2848L143.372 43.811L138.019 51.2848H132.076L140.333 39.5849L132.712 28.8633H138.79L143.372 35.3154L147.906 28.8633H154.031L146.364 39.5849L154.62 51.2848H148.724Z" fill="currentColor"></path>
              <path
              d="M165.96 22.4565V29.2173H172.311V33.7999H165.96V44.9302C165.96 45.304 166.111 45.6626 166.381 45.9271C166.65 46.1916 167.015 46.3405 167.397 46.3411H172.311V51.6302H168.636C163.646 51.6302 160.381 48.7824 160.381 43.8042V33.8043H155.891V29.2173H158.708C160.022 29.2173 160.787 28.45 160.787 27.1804V22.4565H165.96Z"
              fill="currentColor"
              ></path>
              <path
              d="M186.374 44.5872V20.5005H192.359V42.7416C192.359 48.748 189.411 51.6393 184.422 51.6393H177.455V46.3502H184.577C185.053 46.3502 185.511 46.1645 185.848 45.8339C186.185 45.5032 186.374 45.0548 186.374 44.5872"
              fill="currentColor"
              ></path>
              <path
              d="M195.945 41.1847H201.708C202.027 44.6629 204.386 46.8781 208.196 46.8781C211.598 46.8781 213.959 45.5455 213.959 42.7869C213.959 36.113 196.892 40.739 196.892 28.8174C196.896 23.7023 201.387 20.1479 207.839 20.1479C214.553 20.1479 219.088 23.9283 219.365 29.7565H213.633C213.363 27.0435 211.195 25.2196 207.828 25.2196C204.698 25.2196 202.748 26.6435 202.748 28.8218C202.748 35.7174 220.037 30.5609 220.037 42.7021C220.037 48.4846 215.182 51.9998 208.198 51.9998C200.986 51.9998 196.269 47.7281 195.952 41.189"
              fill="currentColor"
              ></path>
              <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.7513 14.261C28.0767 11.3817 23.8903 11.3817 22.2157 14.261L3.96535 45.641C2.29077 48.5204 4.38399 52.1195 7.73316 52.1195H21.9804C20.5493 50.8688 20.0193 48.7051 21.1023 46.8487L34.9243 23.1556L29.7513 14.261Z"
              fill="#80EEC0"
              ></path>
              <path
              d="M41.3151 21.1443C42.701 18.7885 46.1656 18.7885 47.5515 21.1443L62.6552 46.8188C64.0411 49.1746 62.3088 52.1194 59.537 52.1194H29.3296C26.5579 52.1194 24.8255 49.1746 26.2114 46.8188L41.3151 21.1443Z"
              fill="#00DC82"
              ></path>
            </svg>
          </a>
        </div>
        <nav class="items-center justify-center hidden h-full lg:flex">
          <div tabindex="0" class="relative inline-block text-left cursor-default">
            <div class="flex items-center w-full mx-2">
              <span aria-label="Discover" class="flex font-medium group whitespace-nowrap px-1 py-2 hover:d-primary-text-hover" data-v-d2a13740="">
                Discover
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4 dark:text-secondary light:text-gray-300">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="z-30 rounded-md shadow-lg w-max pt-2" style="position: absolute; left: 325px; top: 56px; margin: 0px; display: none;" data-popper-placement="bottom">
              <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              class="overflow-y-auto rounded-md divide-y py-1 bg-cloud-surface dark:bg-sky-darkest divide-gray-100 dark:divide-gray-700 bg-white dark:bg-secondary-darkest"
              >
              <div class="divide-y divide-gray-100 dark:divide-gray-700">
                <div class="py-1 grid grid-cols-1">
                  <div role="menuitem">
                    <a href="/showcases" aria-label="Showcases" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                      <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                        <div class="flex space-x-2 items-center">
                          <div class="rounded-md w-8 h-8 p-2 bg-sand"><img src="https://nuxtjs.org/img/header/showcases.svg" alt="Showcases" /></div>
                          <div>
                            <h5 class="font-bold text-sm">Showcases</h5>
                            <p class="text-xs">Selection of website built with Nuxt</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div role="menuitem">
                    <a href="/case-studies" aria-label="Case studies" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                      <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                        <div class="flex space-x-2 items-center">
                          <div class="rounded-md w-8 h-8 p-2 bg-sand-dark"><img src="https://nuxtjs.org/img/header/case-studies.svg" alt="Case studies" /></div>
                          <div>
                            <h5 class="font-bold text-sm">Case studies</h5>
                            <p class="text-xs">How companies use Nuxt</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div role="menuitem">
                    <a href="/testimonials" aria-label="Testimonials" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                      <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                        <div class="flex space-x-2 items-center">
                          <div class="rounded-md w-8 h-8 p-2 bg-sand-darker"><img src="https://nuxtjs.org/img/header/testimonials.svg" alt="Testimonials" /></div>
                          <div>
                            <h5 class="font-bold text-sm">Testimonials</h5>
                            <p class="text-xs">What they think about us</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div tabindex="0" class="relative inline-block text-left cursor-default">
          <div class="flex items-center w-full mx-2">
            <span aria-label="Learn" class="flex font-medium group whitespace-nowrap px-1 py-2 hover:d-primary-text-hover" data-v-d2a13740="">
              Learn
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4 dark:text-secondary light:text-gray-300">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="z-30 rounded-md shadow-lg w-max pt-2" style="position: absolute; left: 418px; top: 56px; margin: 0px; display: none;" data-popper-placement="bottom">
            <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            class="overflow-y-auto rounded-md divide-y py-1 bg-cloud-surface dark:bg-sky-darkest divide-gray-100 dark:divide-gray-700 bg-white dark:bg-secondary-darkest"
            >
            <div class="divide-y divide-gray-100 dark:divide-gray-700">
              <div class="py-1 grid grid-cols-1">
                <div role="menuitem">
                  <a href="/docs" aria-label="Docs" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                    <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                      <div class="flex space-x-2 items-center">
                        <div class="rounded-md w-8 h-8 p-2 bg-green-500"><img src="https://nuxtjs.org/img/header/docs.svg" alt="Docs" /></div>
                        <div>
                          <h5 class="font-bold text-sm">Docs</h5>
                          <p class="text-xs">Create fast websites easily</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div role="menuitem">
                  <a href="/examples" aria-label="Examples" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                    <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                      <div class="flex space-x-2 items-center">
                        <div class="rounded-md w-8 h-8 p-2 bg-green-600"><img src="https://nuxtjs.org/img/header/examples.svg" alt="Examples" /></div>
                        <div>
                          <h5 class="font-bold text-sm">Examples</h5>
                          <p class="text-xs">Understand everything in Nuxt</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div role="menuitem">
                  <a href="/tutorials" aria-label="Tutorials" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                    <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                      <div class="flex space-x-2 items-center">
                        <div class="rounded-md w-8 h-8 p-2 bg-green-700"><img src="https://nuxtjs.org/img/header/tutorials.svg" alt="Tutorials" /></div>
                        <div>
                          <h5 class="font-bold text-sm">Tutorials</h5>
                          <p class="text-xs">Learn with concrete cases</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div role="menuitem">
                  <a
                  href="https://masteringnuxt.com/?utm_source=nuxt&amp;utm_medium=link&amp;utm_campaign=nsite"
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                  aria-label="Master courses"
                  class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white"
                  data-v-d2a13740=""
                  >
                  <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                    <div class="flex space-x-2 items-center">
                      <div class="rounded-md w-8 h-8 p-2 bg-green-800"><img src="https://nuxtjs.org/img/header/master-courses.svg" alt="Master courses" /></div>
                      <div>
                        <h5 class="font-bold text-sm">Master courses</h5>
                        <p class="text-xs">Learn more with experts</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div tabindex="0" class="relative inline-block text-left cursor-default">
      <div class="flex items-center w-full mx-2">
        <span aria-label="Explore" class="flex font-medium group whitespace-nowrap px-1 py-2 hover:d-primary-text-hover" data-v-d2a13740="">
          Explore
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4 dark:text-secondary light:text-gray-300">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </div>
      <div class="z-30 rounded-md shadow-lg w-max pt-2" style="position: absolute; left: 506px; top: 56px; margin: 0px; display: none;" data-popper-placement="bottom">
        <div
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        class="overflow-y-auto rounded-md divide-y py-1 bg-cloud-surface dark:bg-sky-darkest divide-gray-100 dark:divide-gray-700 bg-white dark:bg-secondary-darkest"
        >
        <div class="divide-y divide-gray-100 dark:divide-gray-700">
          <div class="py-1 grid grid-cols-1">
            <div role="menuitem">
              <a href="/deployments" aria-label="Deployments" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                  <div class="flex space-x-2 items-center">
                    <div class="rounded-md w-8 h-8 p-2 bg-indigo-light"><img src="https://nuxtjs.org/img/header/deployments.svg" alt="Deployments" /></div>
                    <div>
                      <h5 class="font-bold text-sm">Deployments</h5>
                      <p class="text-xs">How to Deploy Nuxt</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div role="menuitem">
              <a href="/modules" aria-label="Modules" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                  <div class="flex space-x-2 items-center">
                    <div class="rounded-md w-8 h-8 p-2 bg-indigo"><img src="https://nuxtjs.org/img/header/modules.svg" alt="Modules" /></div>
                    <div>
                      <h5 class="font-bold text-sm">Modules</h5>
                      <p class="text-xs">Extend the power of Nuxt</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div role="menuitem">
              <a href="/themes" aria-label="Themes" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                  <div class="flex space-x-2 items-center">
                    <div class="rounded-md w-8 h-8 p-2 bg-indigo-dark"><img src="https://nuxtjs.org/img/header/themes.svg" alt="Themes" /></div>
                    <div>
                      <h5 class="font-bold text-sm">Themes</h5>
                      <p class="text-xs">Get start with themes</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div role="menuitem">
              <a href="/video-courses" aria-label="Video Courses" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
                <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                  <div class="flex space-x-2 items-center">
                    <div class="rounded-md w-8 h-8 p-2 bg-indigo-darker"><img src="https://nuxtjs.org/img/header/video-courses.svg" alt="Video Courses" /></div>
                    <div>
                      <h5 class="font-bold text-sm">Video Courses</h5>
                      <p class="text-xs">Learn step by step</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div tabindex="0" class="relative inline-block text-left cursor-default">
    <div class="flex items-center w-full mx-2">
      <span aria-label="Community" class="flex font-medium group whitespace-nowrap px-1 py-2 hover:d-primary-text-hover" data-v-d2a13740="">
        Community
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4 dark:text-secondary light:text-gray-300">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <div class="z-30 rounded-md shadow-lg w-max pt-2" style="position: absolute; left: 617px; top: 56px; margin: 0px; display: none;" data-popper-placement="bottom">
      <div
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
      class="overflow-y-auto rounded-md divide-y py-1 bg-cloud-surface dark:bg-sky-darkest divide-gray-100 dark:divide-gray-700 bg-white dark:bg-secondary-darkest"
      >
      <div class="divide-y divide-gray-100 dark:divide-gray-700">
        <div class="py-1 grid grid-cols-2">
          <div role="menuitem">
            <a href="/announcements" aria-label="Announcements" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
              <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                <div class="flex space-x-2 items-center">
                  <div class="rounded-md w-8 h-8 p-2 bg-mint-lighter"><img src="https://nuxtjs.org/img/header/announcements.svg" alt="Announcements" /></div>
                  <div>
                    <h5 class="font-bold text-sm">Announcements</h5>
                    <p class="text-xs">Last news about Nuxt</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div role="menuitem">
            <a href="/teams" aria-label="Teams" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
              <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                <div class="flex space-x-2 items-center">
                  <div class="rounded-md w-8 h-8 p-2 bg-mint-dark"><img src="https://nuxtjs.org/img/header/teams.svg" alt="Teams" /></div>
                  <div>
                    <h5 class="font-bold text-sm">Teams</h5>
                    <p class="text-xs">They are Nuxt</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div role="menuitem">
            <a href="/events" aria-label="Events" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
              <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                <div class="flex space-x-2 items-center">
                  <div class="rounded-md w-8 h-8 p-2 bg-mint-light"><img src="https://nuxtjs.org/img/header/events.svg" alt="Events" /></div>
                  <div>
                    <h5 class="font-bold text-sm">Events</h5>
                    <p class="text-xs">When and where we gonna be</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div role="menuitem">
            <a href="/releases" aria-label="Releases" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
              <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                <div class="flex space-x-2 items-center">
                  <div class="rounded-md w-8 h-8 p-2 bg-mint-darker"><img src="https://nuxtjs.org/img/header/releases.svg" alt="Releases" /></div>
                  <div>
                    <h5 class="font-bold text-sm">Releases</h5>
                    <p class="text-xs">All the code we released</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div role="menuitem">
            <a href="/sponsors" aria-label="Sponsors" class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white" data-v-d2a13740="">
              <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
                <div class="flex space-x-2 items-center">
                  <div class="rounded-md w-8 h-8 p-2 bg-mint"><img src="https://nuxtjs.org/img/header/sponsors.svg" alt="Sponsors" /></div>
                  <div>
                    <h5 class="font-bold text-sm">Sponsors</h5>
                    <p class="text-xs">They trust us</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div role="menuitem">
            <a
            href="https://twitter.com/nuxt_js/timelines/1439936107421085704"
            rel="noopener nofollow noreferrer"
            target="_blank"
            aria-label="Tweets"
            class="flex font-medium group whitespace-nowrap px-2 py-1 hover:text-sky-black dark:hover:text-white"
            data-v-d2a13740=""
            >
            <div class="py-1 px-2 rounded-md w-full hover:dark:bg-sky-black hover:bg-cloud-lightest">
              <div class="flex space-x-2 items-center">
                <div class="rounded-md w-8 h-8 p-2 bg-mint-darkest"><img src="https://nuxtjs.org/img/header/tweets.svg" alt="Tweets" /></div>
                <div>
                  <h5 class="font-bold text-sm">Tweets</h5>
                  <p class="text-xs">They talk about us</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<a href="/partners" aria-label="Partners" class="flex font-medium group whitespace-nowrap px-1 py-2 hover:d-primary-text-hover" data-v-d2a13740="">
  Partners
</a>
</nav>
<div class="flex items-center justify-end gap-1 lg:flex-1">
  <div tabindex="0" class="inline-flex items-center w-12 h-12 hidden lg:inline-flex relative inline-block text-left cursor-default">
    <div class="flex items-center w-full">
      <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="d-icon w-6 h-6 m-auto d-secondary-text hover:d-secondary-text-hover">
        <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4 dark:text-secondary light:text-gray-300">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </div>
    <div class="z-30 rounded-md shadow-lg w-auto pt-2" style="display: none;">
      <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu" class="overflow-y-auto rounded-md divide-y py-1 max-h-56 divide-gray-100 dark:divide-gray-700 bg-white dark:bg-secondary-darkest">
        <div class="divide-y divide-gray-100 dark:divide-gray-700">
          <div class="py-1">
            <div role="menuitem">
              <a href="/v3/" aria-current="page" class="px-4 py-1 flex items-center whitespace-no-wrap nuxt-link-exact-active nuxt-link-active font-semibold cursor-default text-gray-800 dark:text-gray-200">English</a>
            </div>
            <div role="menuitem"><a href="/fr/v3/" class="px-4 py-1 flex items-center whitespace-no-wrap hover:d-text-primary">Français</a></div>
            <div role="menuitem"><a href="/ja/v3/" class="px-4 py-1 flex items-center whitespace-no-wrap hover:d-text-primary">日本語</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button slot="placeholder" aria-label="Color Mode" class="w-12 h-12 rounded hidden lg:block d-icon">
    <svg width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 m-auto"><path fill="currentColor" d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"></path></svg>
  </button>
  <div id="docsearch">
    <button type="button" class="DocSearch DocSearch-Button" aria-label="Search">
      <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20">
        <path
        d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
        stroke="currentColor"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
        ></path>
      </svg>
      <span class="DocSearch-Button-Placeholder">Search</span>
      <span class="DocSearch-Button-Key">
        <svg width="15" height="15" class="DocSearch-Control-Key-Icon">
          <path
          d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
          stroke-width="1.2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="square"
          ></path>
        </svg>
      </span>
      <span class="DocSearch-Button-Key">K</span>
    </button>
  </div>
</div>
</div>
</header>
</div>
</template>
<style scoped>
.DocSearch {
    --docsearch-primary-color: #00dc82;
    --docsearch-highlight-color: var(--docsearch-primary-color);
    --docsearch-text-color: #71717a;
    --docsearch-modal-background: #f4f4f5;
    --docsearch-searchbox-shadow: 0 0 0 2px var(--docsearch-primary-color);
    --docsearch-searchbox-background: var(--color-transparent);
    --docsearch-searchbox-focus-background: var(--color-transparent);
    --docsearch-hit-color: var(--color-gray-700);
    --docsearch-hit-shadow: none;
    --docsearch-logo-color: var(--docsearch-text-color);
    --docsearch-muted-color: var(--color-gray-500);
    --docsearch-container-background: rgb(244 244 245/55%);
}
.dark .DocSearch {
    --docsearch-text-color: #92adad;
    --docsearch-modal-background: #003543;
    --docsearch-modal-shadow: inset 1px 1px 0 0 #052f14, 0 3px 8px 0 #0b160d;
    --docsearch-hit-color: var(--color-gray-300);
    --docsearch-hit-background: #012a35;
    --docsearch-footer-background: #012a35;
    --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5), 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
    --docsearch-container-background: rgb(0 30 38/64%);
}
.DocSearch-Container {
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
}
@media (min-width: 1024px) {
    .DocSearch-Modal {
        border-radius: 0.75rem !important;
    }
}
.DocSearch-SearchBar {
    padding-bottom: 0.25rem !important;
}
.DocSearch-Button {
    background-color: transparent !important;
    border-radius: 0.125rem !important;
    height: 3rem !important;
    margin: auto !important;
    width: 3rem !important;
}
.DocSearch-Button:focus {
    outline: 2px solid transparent !important;
    outline-offset: 2px !important;
}
.DocSearch-Button:hover {
    --tw-shadow-color: 0, 0, 0 !important;
    --tw-shadow: none !important;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow) !important;
}
.DocSearch-Button > svg {
    margin-left: auto !important;
    margin-right: auto !important;
}
.DocSearch-Button-Key,
.DocSearch-Button-Placeholder {
    display: none !important;
}
.DocSearch-NoResults > .DocSearch-Screen-Icon > svg {
    margin-left: auto !important;
    margin-right: auto !important;
}
.DocSearch-Commands-Key {
    background-image: none !important;
    border-radius: 0.25rem !important;
    border-width: 1px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: auto !important;
    padding: 0.25rem !important;
    --tw-shadow-color: 0, 0, 0 !important;
    --tw-shadow: none !important;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow) !important;
    width: auto !important;
}
.light .DocSearch-Commands-Key {
    --tw-border-opacity: 1 !important;
    border-color: rgba(113, 113, 122, var(--tw-border-opacity)) !important;
}
</style>