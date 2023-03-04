<template lang="pug">
.cv 
  .cv_container
    h2.cv_title CV
    a.cv_link(href='../src/assets/cv/cv.pdf' download='Frontend Developer - Yuliya Poznyak.pdf')
      base-button.cv_button Download CV
  .cv_wrapper
    .cv_item
      .cv_item_title 
        span.cv_item_title_text Key Skills
      .cv_item_info
        ul.cv_item_list
           li.cv_item_list_item(v-for='keySkill in keySkills') {{ keySkill }}
    .cv_item
      .cv_item_title 
        span.cv_item_title_text Technical Skills
      .cv_item_info.tech
        ul.cv_item_list
           li.cv_item_list_item(v-for='technikalSkill in technikalSkills1') {{ technikalSkill }}
        ul.cv_item_list
           li.cv_item_list_item(v-for='technikalSkill in technikalSkills2') {{ technikalSkill }}
    .cv_item
      .cv_item_title 
        span.cv_item_title_text Education
      .cv_item_info.rows
        .cv_item_info_paragraph 
           p.paragraph_title 2021
           .paragraph_info
              p.paragraph_info_subscr UX&UI design course
              p.paragraph_info_text Zefir Design School
        .cv_item_info_paragraph 
            p.paragraph_title 2016-2020
            .paragraph_info
                p.paragraph_info_subscr Faculty of marketing ang  logistics, Department of Logistics and Pricing Policy
                p.paragraph_info_text Belarusian State Economic University
    .cv_item
      .cv_item_title 
        span.cv_item_title_text Languages
      .cv_item_info.rows
        .cv_item_info_paragraph 
          .paragraph_title English
          .paragraph_info
            .paragraph_info_subscr C1
        .cv_item_info_paragraph 
          .paragraph_title Russian
          .paragraph_info
            .paragraph_info_subscr Native
</template>

<script setup>
const keySkills = [
  "Experience developing Vue apps from scratch",
  "Excellent knowledge of JavaScript/Vue/Vuex/Pinia/Vue Router/ REST API",
  "Work with preprocessors (Sass, PUG)",
  "Knowledge of SPA design patterns",
  "Selection of optimal libraries such as and components for project implementation",
  "Responsive design and optimizing web applications for different screen sizes and devices",
];
const technikalSkills1 = [
  "Vue.js",
  "Vite",
  "Pinia/Vuex",
  "Vue Router, REST API",
  "CSS / SASS / Bootstrap",
  "HTML / BEM / PUG",
];
const technikalSkills2 = [
  "JavaScript / TypeScript",
  "Vuetify",
  "Firebase",
  "Git",
  "UX/UI basics",
];
</script>

<style scoped lang="scss">
.cv {
  padding: 100px 0 160px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1800px) {
    padding: 80px 0 100px;
  }

  @media (max-width: 1600px) {
    padding: 60px 0 60px;
  }

  @media (max-width: 925px) {
    flex-direction: column;
    gap: 10px;
    padding: 100px 0 60px;
  }

  &_container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-self: flex-start;
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
      line-height: 120px;
    }

    @media (max-width: 925px) {
      font-size: 72px;
      line-height: 110%;
    }
  }

  &_button {
    position: relative;
    width: 100%;
    white-space: nowrap;
    border: 1px solid transparent;

    &::after {
      content: url("../assets/icons/download.svg");
      position: absolute;
      top: 19px;
      right: 32px;

      @media (max-width: 1800px) {
        top: 15px;
        right: 23px;
      }

      @media (max-width: 1600px) {
        right: 25px;
      }

      @media (max-width: 1250px) {
        top: 13px;
      }
    }
  }

  &_wrapper {
    display: flex;
    flex-direction: column;
    gap: 80px;
    max-width: 74%;
    padding-top: 32px;

    @media (max-width: 1800px) {
      gap: 50px;
    }

    @media (max-width: 1600px) {
      max-width: 67%;
      gap: 50px;
    }

    @media (max-width: 925px) {
      max-width: 100%;
      gap: 80px;
    }


  }

  &_item {
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    gap: 64px;
    border-top: 1px solid black;
    width: 100%;

    @media (max-width: 925px) {
      flex-direction: column;
      width: 100%;
      gap: 16px;
      padding-top: 12px;
    }

    &_title {
      width: 41.5%;

      @media (max-width: 1600px) {
        width: 38%;
      }

      @media (max-width: 1250px) {
        width: 30%;
      }

      @media (max-width: 500px) {
        width: 90%;
      }

      &_text {
        display: inline-block;
        font-weight: 400;
        font-size: 72px;
        line-height: 91px;
        margin: 0;
        max-width: 324px;
        margin: 0;

        @media (max-width: 1800px) {
          font-size: 64px;
          line-height: 80px;
        }

        @media (max-width: 1600px) {
          font-size: 55px;
          line-height: 65px;
        }

        @media (max-width: 1250px) {
          font-size: 47px;
          line-height: 55px;
        }
      }
    }

    &_info {
      width: 53%;
      padding-top: 16px;

      @media (max-width: 925px) {
        width: 100%;
      }

      @media (max-width: 925px) {
        padding-top: 0;
      }

      &_paragraph {
        display: flex;
        justify-content: flex-start;
        gap: 30px;

        .paragraph_title {
          width: 108px;
          font-weight: 400;
          font-size: 20px;
          line-height: 150%;
          margin: 0;

          @media (max-width: 1800px) {
            font-size: 16px;
          }

          @media (max-width: 1250px) {
            font-size: 14px;
          }

          @media (max-width: 925px) {
            font-size: 16px;
            line-height: 150%;
          }
        }

        .paragraph_info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 362px;

          @media (max-width: 1600px) {
            width: 265px;
          }

          &_subscr {
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            margin: 0;

            @media (max-width: 1800px) {
              font-size: 16px;
            }

            @media (max-width: 1250px) {
              font-size: 14px;
            }

            @media (max-width: 925px) {
              font-size: 16px;
              line-height: 150%;
            }
          }

          &_text {
            font-weight: 400;
            font-size: 20px;
            line-height: 150%;
            color: #6a6a6a;
            margin: 0;

            @media (max-width: 1800px) {
              font-size: 16px;
            }

            @media (max-width: 1250px) {
              font-size: 14px;
            }

            @media (max-width: 925px) {
              font-size: 16px;
              line-height: 150%;
            }
          }
        }
      }
    }

    .rows {
      display: flex;
      flex-direction: column;
      gap: 40px;

      @media (max-width: 1800px) {
        gap: 20px;
      }
    }

    .tech {
      max-height: 242px;
      display: flex;
      justify-content: flex-start;
      gap: 100px;

      @media (max-width: 1800px) {
        gap: 70px;
      }

      @media (max-width: 1600px) {
        gap: 30px;
      }

      @media (max-width: 925px) {
        gap: 20%;
      }
    }

    &_list {
      padding: 0;
      margin: 0;
      list-style-type: none;

      &_item {
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        position: relative;
        margin-left: 14px;

        @media (max-width: 1800px) {
          font-size: 16px;
          line-height: 150%;
        }

        @media (max-width: 1250px) {
          font-size: 14px;
        }

        @media (max-width: 925px) {
          font-size: 16px;
          line-height: 150%;
        }

        &::before {
          content: "";
          position: absolute;
          width: 4px;
          height: 4px;
          top: 14px;
          left: -10px;
          background-color: black;
          border-radius: 10px;

          @media (max-width: 1800px) {
            top: 11px;
          }
        }
      }
    }
  }
}
</style>
