import Vue from 'vue'
import Router from 'vue-router'
import NIndex from '@/components/index/index'
import NAnswer from '@/components/answer/answer'
import NColumn from '@/components/column/column'
import NStudy from '@/components/study/study'
import NTag from '@/components/tag/tag'
import NFind from '@/components/find/find'
import NWrite from '@/components/write/write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      component: NIndex
    },
    {
      path: '/answer',
      component: NAnswer
    },
    {
      path: '/column',
      component: NColumn
    },
    {
      path: '/study',
      component: NStudy
    },
    {
      path: '/tag',
      component: NTag
    },
    {
      path: '/find',
      component: NFind
    },
    {
      path: '/write',
      component: NWrite
    }
  ]
})
