<template lang="pug">
.portfolio 
    .portfolio_info 
      h2.portfolio_title Portfolio 
      .portfolio_wrapper   
        h3.portfolio_subtitle Hello, my name is Yuliya. I’m a 
          a.portfolio_subtitle_link(href="#cv") frontend developer
        p.portfolio_text I am a frontend developer. My primary focus is on creating dynamic and interactive user interfaces. In addition I have a keen eye for design and enjoy creating visually appealing and user-friendly web experiences. I am committed to delivering clean, efficient, and maintainable code that adheres to best practices and industry standards. I am excited about the prospect of working with a team that shares my passion for excellence in web development.
        a.portfolio_link(href="#projects")
          base-button.portfolio_button To projects
    img.portfolio_img(:src="photo")
</template>

<script setup>
import Photo from "../assets/images/photo.png";
import { ref } from "vue";

const photo = ref(Photo);
</script>

<style scoped lang="scss">
.portfolio {
  display: flex;
  justify-content: space-between;
  gap: 65px;
  padding: 180px 0 120px;

  @media (max-width: 1800px) {
    padding: 140px 0 50px;
  }

  @media (max-width: 1250px) {
    gap: 52px;
  }

  @media (max-width: 925px) {
    flex-direction: column;
    gap: 40px;
  }

  &_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 767px;

    @media (max-width: 1800px) {
      width: 587px;
    }

    @media (max-width: 1600px) {
      width: 430px;
    }

    @media (max-width: 925px) {
      width: 100%;
      gap: 40px;
    }
  }

  &_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;

    @media (max-width: 1280px) {
      gap: 20px;
    }

    @media (max-width: 925px) {
      gap: 16px;
    }
  }

  &_title {
    font-family: "Playfair Display";
    font-weight: 400;
    font-size: 140px;
    line-height: 154px;
    margin: 0;

    @media (max-width: 1800px) {
      font-size: 120px;
      line-height: 82%;
    }

    @media (max-width: 1600px) {
      font-size: 100px;
      line-height: 77%;
    }

    @media (max-width: 925px) {
      font-size: 72px;
      line-height: 110%;
    }
  }

  &_subtitle {
    font-weight: 400;
    font-size: 72px;
    line-height: 90.5px;
    margin: 0;

    @media (max-width: 1800px) {
      font-size: 54px;
      line-height: 60px;
    }

    @media (max-width: 1600px) {
      font-size: 45px;
      line-height: 48px;
    }

    @media (max-width: 1280px) {
      font-size: 39px;
      line-height: 42px;
    }

    &_link {
      color: #ff5454;
      text-decoration: none;
      font-style: italic;
      cursor: pointer;

      &:hover {
            text-decoration: underline 1px solid #FF5454;
            text-underline-offset: 6px;
      }
    }
  }

  &_text {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin: 0;

    @media (max-width: 1600px) {
      font-size: 16px;
      line-height: 150%;
    }

    @media (max-width: 1280px) {
      font-size: 14px;
      line-height: 140%;
    }

    @media (max-width: 925px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  &_button {
    position: relative;
    border: none;

    &::after {
      content: url("../assets/icons/arrow.svg");
      position: absolute;
      top: 16px;
      right: 37px;
      transform: rotate(90deg);

      @media (max-width: 1800px) {
        top: 13px;
        right: 24px;
      }
    }
  }

  &_img {
    @media (max-width: 1800px) {
      width: 496px;
      height: 627.2px;
    }

    @media (max-width: 1250px) {
      width: 408px;
      height: 524.2px;
    }

    @media (max-width: 925px) {
      align-self: flex-end;
    }

    @media (max-width: 435px) {
      width: 329px;
      height: 431.2px;
    }
  }
}
</style>
