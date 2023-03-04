<template lang="pug">
.projects 
    h2.projects_title Projects
    .projects_gallery
      a.projects_item_first(href='https://learning-app-aefd1.web.app/' target="_blank")
        img.projects_item_img_first(:src="img1")
        h4.projects_item_title Web app to find a mentor
        p.projects_item_description Stack: Vue.js (Options API), JavaScript, HTML, BEM, SCSS, Vuex, Vue Router, REST API 
      a.projects_item_second(href='https://nft-landing-ad3ef.web.app' target="_blank")
        img.projects_item_img_second(:src="img2")
        h4.projects_item_title Landing page
        p.projects_item_description Stack: Vue.js (Composition API), JavaScript, HTML, BEM, SCSS, Vite
      a.projects_item_third(href='https://crm-system23.netlify.app' target="_blank")
        img.projects_item_img_third(:src="img3")
        h4.projects_item_title CRM system
        p.projects_item_description Stack: Vue.js (Composition API), JavaScript, PUG, SCSS, Vite, Pinia, Vue Router
</template>

<script setup>
import { ref } from "vue";
import Img1 from "../assets/images/img1.png";
import Img2 from "../assets/images/img2.png";
import Img3 from "../assets/images/img3.png";

const img1 = ref(Img1);
const img2 = ref(Img2);
const img3 = ref(Img3);
</script>

<style scoped lang="scss">
.projects {
  padding: 100px 0 100px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: space-between;

  @media (max-width: 1800px) {
    padding: 80px 0 80px;
    gap: 60px;
  }

  @media (max-width: 1600px) {
    padding: 70px 0 60px;
    gap: 50px;
  }

  @media (max-width: 1600px) {
    padding: 100px 0 60px;
  }

  &_title {
    font-family: "Playfair Display";
    font-weight: 400;
    font-size: 140px;
    line-height: 154px;
    margin: 0;

    @media (max-width: 1800px) {
      font-size: 120px;
      line-height: 110%;
    }

    @media (max-width: 1600px) {
      font-size: 100px;
      line-height: 105%;
    }

    @media (max-width: 925px) {
      font-size: 72px;
      line-height: 110%;
    }
  }

  &_gallery {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 64px;

    @media (max-width: 1800px) {
      gap: 50px;
    }

    @media (max-width: 1600px) {
      gap: 40px;
    }

    @media (max-width: 925px) {
      flex-direction: column;
      gap: 40px;
      align-items: flex-end;
    }

    @media (max-width: 565px) {
      align-items: center;
    }
  }

  &_item_first {
    width: 491px;

    @media (max-width: 1800px) {
      width: 400px;
    }

    @media (max-width: 1600px) {
      width: 330px;
    }

    @media (max-width: 1600px) {
      width: 260px;
    }

    @media (max-width: 925px) {
      width: 472px;
    }

    @media (max-width: 555px) {
      width: 329px;
    }

    @media (max-width: 360px) {
      width: 305px;
    }

    &::before {
      content: "vue.js";
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 24px;
      background-color: #ffffff;
      border-radius: 40px;
      top: 500px;
      left: 15px;

      @media (max-width: 1600px) {
        top: 331px;
        padding: 10px 12px;
      }

      @media (max-width: 1250px) {
        top: 335px;
        left: 11px;
      }

      @media (max-width: 925px) {
        top: 420px;
      }

      @media (max-width: 555px) {
        top: 276px;
      }
    }
  }

  &_item_second {
    width: 320px;

    @media (max-width: 1800px) {
      width: 290px;
    }

    @media (max-width: 1600px) {
      width: 250px;
    }

    @media (max-width: 1600px) {
      width: 190px;
    }

    @media (max-width: 925px) {
      width: 472px;
    }

    @media (max-width: 555px) {
      width: 329px;
    }

    @media (max-width: 360px) {
      width: 305px;
    }

    &::before {
      content: "vue.js";
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 24px;
      background-color: #ffffff;
      border-radius: 40px;
      top: 292px;
      left: 15px;

      @media (max-width: 1800px) {
        top: 275px;
      }

      @media (max-width: 1600px) {
        top: 153px;
        padding: 10px 12px;
      }

      @media (max-width: 1250px) {
        top: 154px;
        left: 11px;
      }

      @media (max-width: 925px) {
        top: 418px;
      }

      @media (max-width: 555px) {
        top: 276px;
      }
    }
  }

  &_item_third {
    width: 352px;

    @media (max-width: 1800px) {
      width: 290px;
    }

    @media (max-width: 1600px) {
      width: 250px;
    }

    @media (max-width: 1600px) {
      width: 190px;
    }

    @media (max-width: 925px) {
      width: 472px;
    }

    @media (max-width: 555px) {
      width: 329px;
    }

    @media (max-width: 360px) {
      width: 305px;
    }

    &::before {
      content: "vue.js";
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 24px;
      background-color: #ffffff;
      border-radius: 40px;
      top: 360px;
      left: 15px;

      @media (max-width: 1800px) {
        top: 336px;
      }

      @media (max-width: 1600px) {
        top: 215px;
        padding: 10px 12px;
      }

      @media (max-width: 1250px) {
        top: 218px;
        left: 11px;
      }

      @media (max-width: 925px) {
        top: 419px;
      }

      @media (max-width: 555px) {
        top: 276px;
      }
    }
  }

  &_item_first,
  &_item_second,
  &_item_third {
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: black;

    @media (max-width: 1250px) {
      gap: 8px;
    }

    &::after {
      content: url("../assets/icons/follow.svg");
      position: absolute;
      display: flex;
      justify-content: center;
      padding: 16px;
      width: 16px;
      height: 16px;
      background-color: #ffffff;
      border-radius: 40px;
      top: 16px;
      right: 16px;

      @media (max-width: 1600px) {
        top: 12px;
        right: 12px;
        padding: 12px;
      }
    }
  }

  &_item_title {
    font-weight: 400;
    font-size: 56px;
    line-height: 70px;
    margin: 0;

    &:hover {
      color: #FF5454;
    }

    @media (max-width: 1800px) {
      font-size: 48px;
      line-height: 54px;
    }

    @media (max-width: 1600px) {
      font-size: 44px;
      line-height: 49px;
    }

    @media (max-width: 1250px) {
      font-size: 38px;
      line-height: 40px;
    }

    @media (max-width: 925px) {
      font-size: 36px;
      line-height: 45px;
    }
  }

  &_item_description {
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #6A6A6A;

    @media (max-width: 1800px) {
      font-size: 16px;
    }

    @media (max-width: 1250px) {
      font-size: 14px;
      line-height: 140%;
    }

    @media (max-width: 925px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  &_item_img_first {
    height: 560px;
    width: 491px;

    @media (max-width: 1800px) {
      width: 400px;
    }

    @media (max-width: 1600px) {
      width: 260px;
      height: 387px;
    }

    @media (max-width: 925px) {
      width: 472px;
      height: 472px;
    }

    @media (max-width: 555px) {
      width: 329px;
      height: 329px;
    }

    @media (max-width: 360px) {
      width: 305px;
      height: 305px;
    }
  }

  &_item_img_second {
    height: 352px;
    width: 320px;

    @media (max-width: 1800px) {
      width: 290px;
      height: 334px;
    }

    @media (max-width: 1600px) {
      width: 190px;
      height: 208px;
    }

    @media (max-width: 925px) {
      width: 472px;
      height: 472px;
    }

    @media (max-width: 555px) {
      width: 329px;
      height: 329px;
    }

    @media (max-width: 360px) {
      width: 305px;
      height: 305px;
    }
    
  }

  &_item_img_third {
    height: 420px;
    width: 352px;

    @media (max-width: 1800px) {
      width: 290px;
      height: 397px;
    }

    @media (max-width: 1600px) {
      width: 190px;
      height: 270px;
    }

    @media (max-width: 925px) {
      width: 472px;
      height: 472px;
    }

    @media (max-width: 555px) {
      width: 329px;
      height: 329px;
    }

    @media (max-width: 360px) {
      width: 305px;
      height: 305px;
    }
  }
}
</style>
