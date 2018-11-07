<template>
    <div class="content">
        <div class="backgroundStars">
            <div class="stars1"></div>
            <div class="stars2"></div>
            <div class="stars3"></div>
        </div>
        <div class="pages titleWrapper">
            <div class="titleL">{{ mainTitle }}</div>
            <div class="titleS">{{ subTitle }}</div>
        </div>
        <div class="iconWrapper">
            <div class="smallIconWrapper" @click="animate">
                <h4>Click me!</h4>
                <font-awesome-icon icon="caret-up" class="downIcon" v-if="up"/>
                <font-awesome-icon icon="caret-down" class="downIcon" v-else/>
            </div>
        </div>
        <div class="pages profile1">
        </div>
        <div class="pages profile2">
        </div>
        <div class="pages profile3">
        </div>
        <div class="pages profile4">
        </div>
    </div>
</template>

<script>
export default {
    name: 'team',
    data() {
        return {
            up: false,
            pageCounter: 0,
            mainTitle: 'Who are we?',
            subTitle: 'Meet the Drovee team.',
            profiles: [
                
                {
                    id: 0,
                    name: "Who are we?",
                    title: "Meet the drove team",
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
            this.changeTitle();
        },

        changeTitle() {
            if(this.$data.pageCounter === 4) this.$data.pageCounter = 0;
            else this.$data.pageCounter += 1;
            if(this.$data.pageCounter === 4) this.$data.up = true;
            else this.$data.up = false;
            this.$data.mainTitle = this.$data.profiles[this.$data.pageCounter].name;
            this.$data.subTitle = this.$data.profiles[this.$data.pageCounter].title;
        }
    }
}
</script>

<style lang="scss">
    @import '../css/team.scss';
</style>
