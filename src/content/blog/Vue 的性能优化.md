---
title: "Vue 的性能优化"
description: "性能优化"
pubDate: "2023/2/16 16:33:48"
heroImage: ""
---

# Vue 的性能优化

- 对象层级不要过深，否则性能就会差
- 不需要响应式的数据不要放到 data 中（可以用 Object.freeze() 冻结数据）
- v-if 和 v-show 区分使用场景
- computed 和 watch 区分使用场景
    - watch 是监听动作，computed 是计算属性
    - watch 没缓存，只要数据变化就执行。computed 有缓存，只在属性变化的时候才去计算。
    - watch 可以执行异步操作，而 computed 不能
    - watch 常用于一个数据影响多个数据，computed 则常用于多个数据影响一个数据
- v-for 遍历必须加 key，key 最好是 id 值，且避免同时使用 v-if
- 大数据列表和表格性能优化-虚拟列表/虚拟表格
- 防止内部泄漏，组件销毁后把全局变量和事件销毁
- 图片懒加载
- 路由懒加载
- 第三方插件的按需引入
- 适当采用 keep-alive 缓存组件
- 防抖、节流运用
- 服务端渲染 SSR or 预渲染









