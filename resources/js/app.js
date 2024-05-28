import './bootstrap';



import { createApp } from "vue/dist/vue.esm-bundler.js";
import Register from "./components/Register.vue";

const app = createApp({
    components:{
        Register,
    }
});

app.mount('#app');
