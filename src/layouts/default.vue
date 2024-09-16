<template>
  <div>
    <div class="header px-4 pr-6 pt-6 pb-2">
      <nuxt-link :to="localePath('/')">
        <h1 class="text-bold fs-10 fs-md-up-12 mb-6"> Tristan Schulze </h1>
      </nuxt-link>
      <div class="menu__container mb-1">
        <div class="menu__navigation">
          <nuxt-link v-for="mi in menuItems" class="menu__item mr-6 fs-4 fs-md-up-5" :to="localePath(mi.path)">{{mi.text}}</nuxt-link>
        </div>
        <div class="menu__language fs-4 fs-md-up-5">
          <nuxt-link :to="switchLocalePath('de')">DE</nuxt-link>
          |
          <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
        </div>
      </div>
    </div>
    <div class="content bg-primary">
      {{}}
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const menuItems = ref([
  {text: 'NEWS&CONCERTS', path: '/concerts/'}, 
  {text: 'ABOUT', path: '/about/'}, 
  {text: 'COMPOSITIONS', path: '/compositions/'},
  {text: 'PHOTOS', path: '/photos/'},
  {text: 'CONTACT', path: '/contact/'}
]);
</script>

<style lang="scss">
.menu__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 
}
.menu__navigation {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.menu__language {
  white-space: nowrap;
  align-self: center;
}
.header {
  position: relative;
  z-index: 10;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  
  a {
    text-decoration: none;
    color: black
  }
  a.router-link-active {
    text-decoration: underline;
    color: black
  }

}
.content {
  z-index: -10;
  min-height: calc(100vh - 200px);
}
</style>