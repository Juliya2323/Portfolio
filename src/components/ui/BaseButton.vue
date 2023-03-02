<template lang="pug">
button
    slot
</template>

<style lang="scss">
button {
    background-color: #131313;
    padding: 16px 76px 16px 40px;
    border-radius: 100px;
    color: white;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    cursor: pointer;

    &:hover {
      background-color: #262626;
    }

    @media (max-width: 1800px) {
      font-size: 20px;
      line-height: 150%;
      padding: 12px 60px 12px 24px;
    }

    @media (max-width: 1280px) {
      font-size: 18px;
    }
    
}
</style>