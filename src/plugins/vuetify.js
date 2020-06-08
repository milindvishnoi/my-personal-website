import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes:{
            dark: {
                primary: "#2B2D42", //dark voilet
                secondary: "#EDF2F4", //light grey
                extra: "#E53935", //red
                accent: "#EDF2F4", //vanilla-whittish
                headings: "#D90429", //darker red
                trying: "#EF233C"
            },
            light: {
                primary: '#EAE0CC',
                secondary: "#E53935",
                headings: "#2B2D42",
                nav: "#D90429"
            }
        }
    }
});
