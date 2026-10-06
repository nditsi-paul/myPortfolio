import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import SkillServices from '../views/SkillServices.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {path:'/', name:'home', component:Home},
    {path:'/about', name:'about', component:About},
    {path:'/skills-services', name:'skills-services', component:SkillServices},
    {path:'/projects', name:'projects', component:Projects},
    {path:'/contact', name:'contact', component:Contact},
  ]
})

export default router