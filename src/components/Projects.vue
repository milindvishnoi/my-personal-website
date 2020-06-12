<template>
    <v-row>
        <v-col cols="12" class="d-flex justify-center">
            <h1>Projects</h1>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(p, i) in projects" 
        :key="i"
        >
            <app-card
                :desc="p.desc"
                :projectName="p.projectName"
                :descriptionOne="p.descriptionOne"
                :descriptionTwo="p.descriptionTwo"
                :website="p.website"
                :github="p.github"
                :web="p.web" />
        </v-col>
    </v-row>
</template>

<script>
import AppCard from './AppCard.vue'

    export default {
        data() {
            return {
                projects: [
                    {
                        desc: 'Cross-Platform Application',
                        projectName: 'Material Math',
                        descriptionOne: 'Growing up until fifth grade I was bad at Math. I also got a 5/100 in one of the tests!',
                        descriptionTwo: 'Now I am currently purcuring a Math Major. This application is to help all students like me become better at Maths.',
                        website: 'https://material-math.netlify.app/#/',
                        github: 'https://github.com/grey-software/Material-Math'
                    },
                    {
                        desc: 'Python Sript',
                        projectName: 'Downloads Organizer',
                        descriptionOne: 'Once my laptop was running out of storage and my download folder used 100gb. It took me 2 hours of declustering.',
                        descriptionTwo: 'So I created this sript to organize my download folder as soon as I download something.',
                        github: 'https://github.com/milindvishnoi/Download-Folder-Organizer',
                    },
                    {
                        desc: 'Website',
                        projectName: 'Portfolio',
                        descriptionOne: '',
                        descriptionTwo: 'This website gives me a platform to share all experience with you.',
                        website: 'https://milindvishnoi.com',
                        github: 'https://github.com/milindvishnoi/personal-website'
                    },
                    {
                        desc: 'Java Game',
                        projectName: 'Othello',
                        descriptionOne: "Growing up I didn't have a computer until grade 7. I heavyly relayed on the classic board games for entertainment.",
                        descriptionTwo: 'This redesigned Othello is an attempt to give children a taste of these classics with a mordern touch.',
                        github: 'https://github.com/milindvishnoi/Othello-Game'
                    },
                    {
                        desc: 'Web Application',
                        projectName: 'Coffee Shop Templete',
                        descriptionOne: 'I believe in learning by doing and nothings btter than making a project to check ypu learning.',
                        descriptionTwo: 'This was a sample coffee shop templete I created to learn in-depth about Python Flask, Authentication and APIs.',
                        github: 'https://github.com/milindvishnoi/CoffeeShop-MultipleRoleAuthorizationAPI'
                    },
                    {
                        desc: 'Python Game',
                        projectName: 'Mynes',
                        descriptionOne: 'When I finally got a computer. I tried playing the built-in classic games but never understood any of them.',
                        descriptionTwo: 'Now when I know how most of them are played, I want to bring them back. This game is an attempt to do so.',
                        github: 'https://github.com/milindvishnoi/Mynes'
                    },
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