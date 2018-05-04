import Vue from 'vue'
import Router from 'vue-router'
import NIndex from '@/components/index/index'
import NAnswer from '@/components/answer/answer'
import NColumn from '@/components/column/column'
import NStudy from '@/components/study/study'
import NTag from '@/components/tag/tag'
import NFind from '@/components/find/find'
import NWrite from '@/components/write/write'
import Hot from '../components/hot/hot'
import Pay from '../components/pay/pay'
import Answering from '../components/answering/answering'
import More from '../components/more/more'
import Recommend from '../components/recommend/recommend'
import Lasted from '../components/lasted/lasted'
import Hotest from '../components/hotest/hotest'

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
      component: NAnswer,
      children: [
        {
          path: '/',
          redirect: 'hot'
        },
        {
          path: 'hot',
          component: Hot
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'answering',
          component: Answering
        },
        {
          path: 'more',
          component: More
        }
      ]
    },
    {
      path: '/column',
      component: NColumn,
      children: [
        {
          path: '/',
          redirect: 'recommend'
        },
        {
          path: 'recommend',
          component: Recommend
        },
        {
          path: 'lasted',
          component: Lasted
        },
        {
          path: 'hotest',
          component: Hotest
        }
      ]
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
