<template>
  <div class="list">
    <h1>List</h1>
    <router-link :to="{name: 'helloworld', params: {data: '天山雪莲'}}">
      helloworld 链接
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'list',
  data(){
    return {

    }
  }
}
</script>