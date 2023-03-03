<template lang="pug">
footer.footer 
    p.footer_text Contact me for any questions or feedback.
    a.footer_link(:href="'mailto:' + 'yuliya0km@gmail.com'") yuliya0km@gmail.com
</template>

<style scoped lang="scss">
.footer {
    padding: 40px 0 40px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    @media (max-width: 1800px) {
        padding: 40px 0 20px;
    }

    @media (max-width: 750px) {
      flex-direction: column;
    }

    &_text {
        font-weight: 400;
        font-size: 48px;
        line-height: 60px;
        margin: 0;

        @media (max-width: 1800px) {
            font-size: 44px;
        }

        @media (max-width: 1600px) {
            font-size: 30px;
        }

        @media (max-width: 1250px) {
            font-size: 24px;
        }

        @media (max-width: 530px) {
            line-height: 34px;
            text-align: center;
        }
    }

    &_link {
        font-style: italic;
        text-decoration: none;
        font-weight: 400;
        font-size: 48px;
        line-height: 60px;
        color: #FF5454;
        cursor: pointer;

        &:hover {
            text-decoration: underline 1px solid #FF5454;
            text-underline-offset: 6px;
        }

        @media (max-width: 1800px) {
            font-size: 44px;
        }

        @media (max-width: 1600px) {
            font-size: 30px;
        }

        @media (max-width: 1250px) {
            font-size: 24px;
        }

        @media (max-width: 530px) {
            line-height: 34px;
            font-size: 18px;
        }
    }
}
</style>