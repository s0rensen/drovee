<template>
    <main class="home">
        <div class="header">
            <video autoplay muted loop class="vid">
                <source src="../assets/img/bgDroneSmall.mp4" type="video/mp4">
            </video>
            <div class="headerText">
                <h1 class="bigLogo">Drovee</h1>
                <h2 class="slogan">Food on the fly.</h2>
            </div>
            <div class="mail">
                <h3 class="post">
                    <a href="mailto:post@drov.ee" target="_top">post@drov.ee</a>
                </h3>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style lang="scss">
@import '../css/config';
@import '../css/home.scss';
</style>


