<template>
  <div class="list">
    <h1>List</h1>
    <router-link :to="{name: 'helloworld', params: {data: '天山雪莲'}}">
      helloworld 链接
    </router-link>
    <br>

    <HelloWorld @handle="receive" :msg="toSon"/>
    {{fromSon}}<br>

    EventBus<br>
    <button @click="send">sendEventBus</button>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
  name: 'list',
  data(){
    return {
      fromSon: '',
      toSon: '888888888$',
      something: 'EventBus-100'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    receive(value){
      this.fromSon = value
    },
    send(){
      this.$EventBus.$emit('data-a', this.something)
    }
  }
}
</script>