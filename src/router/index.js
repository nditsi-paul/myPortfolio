import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import SkillServices from '../views/SkillServices.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {path:'/',
       name:'home',
        component:Home,
         meta:{title: 'Home'}},
    {path:'/about',
       name:'about',
        component:About,
         meta:{title: 'About'}},
    {path:'/skills-services',
       name:'skills-services',
        component:SkillServices,
         meta:{title: 'Skills & Services'}},
    {path:'/projects',
       name:'projects',
        component:Projects,
         meta:{title: 'Projects'}},
    {path:'/contact',
       name:'contact',
        component:Contact,
         meta:{title: 'Contact'}},
  ]
})
router.afterEach((to) => {
  document.title = to.meta.title
})
export default router