<template>
    <div class="content">
        <div class="backgroundStars">
            <div class="stars1"></div>
            <div class="stars2"></div>
            <div class="stars3"></div>
        </div>
        <div class="titleWrapper" :class="{ titleHigh: titleScreen }">
            <div class="container1">
                <div class="titleL" :class="{ vertTrans: titleInvis }">{{ mainTitle }}</div>
            </div>
            <div class="container2">
                <div class="titleS" :class="{ vertTransS: titleInvis }">{{ subTitle }}</div>
            </div>
        </div>
        <div class="iconWrapper">
            <div class="smallIconWrapper" @click="animate">
                <h4>Click me!</h4>
                <font-awesome-icon icon="caret-up" class="downIcon" v-if="up"/>
                <font-awesome-icon icon="caret-down" class="downIcon" v-else/>
            </div>
        </div>
        <div class="pages" id="prof1">
        </div>
        <div class="pages" id="prof2">
        </div>
        <div class="pages" id="prof3">
        </div>
        <div class="pages" id="prof4">
        </div>
    </div>
</template>

<script>
export default {
    name: 'team',
    data() {
        return {
            show: true,
            up: false,
            titleInvis: false,
            pageCounter: 0,
            titleScreen: false,
            mainTitle: 'Who are we?',
            subTitle: 'Meet the Drovee team.',
            profiles: [
                
                {
                    id: 0,
                    name: "Who are we?",
                    title: "Meet the Drovee team.",
                    text: '',
                },
                {
                    id: 1,
                    name: "Ove Kristian Jørgensen",
                    title: "Chief Executive Officer",
                    text: "test",
                },
                {
                    id: 2,
                    name: "Marius Sørensen",
                    title: "Chief Operational Officer",
                    text: "test"
                },
                {
                    id: 3,
                    name: "Odin Bjørnebo",
                    title: "Chief Financial Officer",
                    text: "test"
                },
                {
                    id: 4,
                    name: "Tor-Fredrik Torgersen",
                    title: "Chief Marketing Officer",
                    text: "test"
                },
            ],
            turn: 0.5,
        }
    },

    computed: {
        rotate180() {
            return { transform: 'rotate(' + this.turn + 'turn)'};
        }
    },

    metaInfo: {
        title: 'Team',
    },

    methods: {
        animate() {
            this.toggleLargeTitle()
            var self = this;
            setTimeout(function() {
                self.changeTitle();
                self.getBox();
                self.toggleLargeTitle();
            }, 1000);
        },

        toggleLargeTitle() {
            this.$data.titleInvis = !this.$data.titleInvis;
        },

        changeTitle() {
            if(this.$data.pageCounter === 4) this.$data.pageCounter = 0;
            else this.$data.pageCounter += 1;
            if(this.$data.pageCounter === 4) this.$data.up = true;
            else this.$data.up = false;
            if(this.$data.pageCounter === 0) this.$data.titleScreen = false;
            else this.$data.titleScreen = true;
            this.$data.mainTitle = this.$data.profiles[this.$data.pageCounter].name;
            this.$data.subTitle = this.$data.profiles[this.$data.pageCounter].title;
        },

        getBox() {
            if(this.$data.pageCounter === 1) var c = document.getElementById('prof4');
            else var c = document.getElementById('prof'.concat(this.$data.pageCounter - 1));
            var d = document.getElementById('prof'.concat(this.$data.pageCounter));
            c.style.top = '100%';
            d.style.top = '0';
        }
    }
}
</script>

<style lang="scss">
    @import '../css/team.scss';
</style>
