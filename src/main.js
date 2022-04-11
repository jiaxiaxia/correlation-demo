import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './assets/theme.css'
import App from './App2.vue'

// async function login() {
//   return fetch('/autodoc/api/v1/user/login', {
//     body: JSON.stringify({ username: 'admin', password: 'admin' }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     method: 'POST',
//   }).then(res => res.json());
// }
// login().then(() => {
//   const app = createApp(App);
//   app.use(ElementPlus, { size: 'small', zIndex: 3000 });
//   app.mount('#app');
// });
const app = createApp(App);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.mount('#app');


