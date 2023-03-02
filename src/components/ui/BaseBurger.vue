<template lang="pug">
.hamburger-slim
</template>

<style scoped lang="scss">
.hamburger-slim {
  background: transparent;
  margin: 0;
  position: relative;
  height: 30px;
  width: 30px;
  transform: scale(0.4);

  &:before,
  &:after {
    background: #000000;
    backface-visibility: hidden;
    content: "";
    height: 2px;
    left: 0;
    transition: 0.75s;
    width: 50px;
  }

  &:before {
    box-shadow: #000000 0 14px 0 0;
    position: absolute;
    top: 0;
  }

  &:after {
    position: absolute;
    top: calc(100% - 2px);
  }

  &.open {

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
}
</style>