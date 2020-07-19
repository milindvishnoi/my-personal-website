import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: "#2B2D42", //dark voilet
                headings: "#D90429", //darker red
                nav: "#D90429",
                background: "#121212",
                text: "#FFFFFF"
            },
            light: {
                primary: '#EDF2F4',
                headings: "#D90429",
                nav: "#2B2D42",
                background: "#EAE0CC",
                text: "#000000"
            }
        }
    },
    breakpoint: {
        thresholds: {
            md: 1000,
        },
    }
});