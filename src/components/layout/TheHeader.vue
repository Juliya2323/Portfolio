<template lang="pug">
.header_wrapper
  header.header
    .header_logo
      a.header_title(href='#portfolio') Yuliya Poznyak
      a.header_subtitle(href='#cv') Front-End Developer
    .header_nav 
      button.header_button(@click='switchNav')
        base-burger(:class="{opened: navIsOpen}")
        //img.header_burger(src='../../assets/icons/burger.svg')
      ul.nav_list(:class="{open: navIsOpen}")
        li.nav_list_item(@click="switchNavList")
          a.nav_list_item_link(href='#cv') CV
        li.nav_list_item(@click="switchNavList")
          a.nav_list_item_link(href='#projects') Projects
        li.nav_list_item(@click="switchNavList")
          a.nav_list_item_link(href='https://github.com/Juliya2323' target="_blank") GitHub
        li.nav_list_item(@click="switchNavList")
          a.nav_list_item_link(href="https://www.linkedin.com/in/jp-lnkdn/" target="_blank") LinkedIn
</template>

<script setup>
import { ref } from 'vue';
import { switchLock } from "../../helpers/index.js";

const navIsOpen = ref(false);

function switchNav()  {
  navIsOpen.value = !navIsOpen.value;
  switchLock(navIsOpen.value);
}

function switchNavList() {
  navIsOpen.value = false;
  switchLock(navIsOpen.value);
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;
  position: fixed;
  top: 0;
  width: 1600px;
  z-index: 7;
  background-color: #f6f6f6;

  @media (max-width: 1800px) {
    width: 1280px;
  }

  @media (max-width: 1600px) {
    width: 1000px;
  }

  @media (max-width: 1250px) {
    width: 850px;
  }

  @media (max-width: 925px) {
    width: 94%;
  }

  &_logo {
    display: flex;
  }

  &_title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding-right: 8px;
    border-right: 1px solid black;
    cursor: pointer;
    transition: all 0.3s ease-out;

    @media (max-width: 1250px) {
      font-size: 14px;
    }

    &:hover {
      font-size: 16.5px;
    }
  }

  &_subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding-left: 8px;
    cursor: pointer;
    transition: all 0.3s ease-out;

    @media (max-width: 1250px) {
      font-size: 14px;
    }

    &:hover {
      font-size: 16.5px;
    }
  }

  &_nav {

    .header_button {
      display: none;
      z-index: 20;
      position: relative;

      @media (max-width: 925px) {
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 0 12px 12px;
        border: 1px solid transparent;
        cursor: pointer;
      }
    }
    .nav_list {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      justify-content: space-between;
      gap: 40px;
      transition: all 0.3s ease-out;

      @media (max-width: 1250px) {
        font-size: 14px;
      }

      @media (max-width: 925px) {
        position: absolute;
        box-sizing: border-box;
        padding: 20%;
        width: 100vw;
        height: 100vh;
        background-color: #f6f6f6;
        flex-direction: column;
        top: 0;
        left: -110%;
        gap: 0;
        align-items: center;
      }

      &.open {
        left: 0;
      }

      &_item {
        cursor: pointer;
        border-bottom: 0.5px solid transparent;
        transition: all 0.3s ease-out;

        @media (max-width: 925px) {
          width: 80%;
          padding: 20px;
          text-align: center;
        }

        &:hover {
          a {
            color: #FF5454;
          }
        }
      }
    }
  }
}

a {
  text-decoration: none;
  color: black;
}

.header_wrapper {
  position: relative;
}

.hamburger-slim.opened {

&:before {
  box-shadow: transparent 0 0 0 0;
  top: 50%;
  transform: rotate(225deg);
}

&:after {
  top: 50%;
  transform: rotate(315deg);
}
}
</style>
