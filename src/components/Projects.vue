<template>
    <v-col>
        <span v-for="(p, i) in projects" :key="i">
        <app-card
            :projectName="p.projectName"
            :descriptionOne="p.descriptionOne"
            :descriptionTwo="p.descriptionTwo"
            :imgsrc="p.imgsrc"
            :website="p.website"
            :github="p.github"
            :web="p.web" />
        </span>
    </v-col>
</template>

<script>
import AppCard from './AppCard.vue'

    export default {
        data() {
            return {
                projects: [
                    {
                    projectName: 'Material Math',
                    descriptionOne: 'Growing up until fifth grade I was bad at Math. I also got a 5/100 in one of the tests.',
                    descriptionTwo: 'Now I am currently purcuring a Math Major. This application is to help all students like me become better at Maths.',
                    imgsrc: '/Users/milindvishnoi/Desktop/projects/personal-website/src/assets/mm.png',
                    website: 'https://material-math.netlify.app/#/',
                    github: 'https://github.com/grey-software/Material-Math'
                    },
                    {
                        projectName: 'Material Math',
                        descriptionOne: 'Growing up until fifth grade I was bad at Math. I also got a 5/100 in one of the tests.',
                        descriptionTwo: 'Now I am currently purcuring a Math Major. This application is to help all students like me become better at Maths.',
                        imgsrc: '/Users/milindvishnoi/Desktop/projects/personal-website/src/assets/mm.png',
                        // website: 'https://material-math.netlify.app/#/',
                        github: 'https://github.com/grey-software/Material-Math',
                    }
                ]
            }
        },
        components: {
            AppCard
        }
    }
</script>

<style scoped>

</style>