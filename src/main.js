import './assets/main.css'

import { compile, createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'
import Setting from './pages/Setting.vue'
import Collection from './components/Collection.vue'
import Pricing from './components/Pricing.vue'
import PricingList from './components/PricingList.vue'
import Project from './pages/Project.vue'
import ProjectPage from './pages/ProjectPage.vue'
import Registration from './pages/Registration.vue'
import User from './pages/User.vue'
import ContactForm from './pages/ContactForm.vue'
import { createI18n } from 'vue-i18n'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  
  { path: '/setting',component: Setting, children:[
    { path: '', component: Collection},
    { path: 'pricing', component: PricingList}
  ]
  },
  { path: '/project', component: Project},
  { path: '/project/:name', component: ProjectPage},
  { path: '/register', component: Registration},
  { path: '/user', component: User},
  { path: '/contact', component: ContactForm},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  linkActiveClass: 'font-bold',
  linkExactActiveClass: 'font-bold',
  history: createWebHistory(),
  routes
})
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            hello: 'hello world',
            about: 'About',
            register: 'Register',
            user: 'User',
            services: 'Services',
            projects: 'Projects',
            setting: 'Setting',
            Contact: 'Contact'
        },
        khm: {
            khmer: 'ខ្មែរ',
            hello: 'សួស្តី​ពិភពលោក',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            user: 'អ្នកប្រើប្រាស់',
            services: 'សេវាកម្ម',
            projects: 'គម្រោង',
            setting: 'ការកំណត់',
            Contact: 'ទំនាក់ទំនង'
        }
    }
}
)
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
