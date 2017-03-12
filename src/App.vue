
<script>
  export default {
    name: 'app',
  }
</script>

<template>
  <div>
    <h1>3º Meetup Vue.js SP</h1>
    <ul>
      <li><router-link :to="{ name: 'products.index' }">Produtos</router-link></li>
      <li><router-link :to="{ name: 'categories.index' }">Categorias</router-link></li>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style>
  ul, li {
    list-style: none;
  }
  li {
    display: inline-block;
    width: 80px;
  }
</style>
