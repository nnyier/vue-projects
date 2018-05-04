# vue-projects
## [Resources](./Resources.md)


> A Vue.js project 

#### vendor 
- [vuex](https://vuex.vuejs.org/zh-cn/intro.html)
- [vue-router](https://router.vuejs.org/zh-cn/)
- [vue-axios](https://github.com/imcvampire/vue-axios)
    - [axios](https://github.com/axios/axios)
- [express-mockjs](https://github.com/52cik/express-mockjs#readme)
    -  [Mock JSON 文档](https://github.com/52cik/express-mockjs/blob/master/README.zh-CN.md)    
#### 什么时候使用Vuex
-
如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的 [global event bus](https://cn.vuejs.org/v2/guide/components.html#%E9%9D%9E%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1)

- [express-mockjs](https://github.com/52cik/express-mockjs#readme)
    -  [Mock JSON 文档](https://github.com/52cik/express-mockjs/blob/master/README.zh-CN.md)

```
├── build  # 配置文件
├── index.html 
├── src
│   ├── assets 页面相关图片
│   ├── main.js 加载组件 入口
│   ├── components  # 公共组件、第三方放在这里 
│   ├── App.vue 根组件

```

## Build Setup

``` bash
# git  clone 
git clone  https://github.com/OSMeteor/vue-boilerplate

cd  vue-boilerplate

# install dependencies
npm install

# mock api data 
npm run mock

# serve with hot reload at localhost:8080
npm run dev or npm start


# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


[vue-devtools)](https://github.com/vuejs/vue-devtools#vue-devtools)