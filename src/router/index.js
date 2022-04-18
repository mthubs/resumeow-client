import { createWebHistory, createRouter } from 'vue-router'

const Builder = () => import('@/views/resume/Builder.vue')

const routes = [
    { path: '/', component: Builder, meta: { title: 'Your Resume' } }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to, from, next) => {
    document.title = to.meta.title + ' - Resumeow CV Maker'
})

export default router