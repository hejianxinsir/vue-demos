<template>
  <div class="hello">
    <h1>HelloWorld</h1>

    父子组件的传递：
    <button @click="sendToF">sendToFather</button>

    <hr>

    接受 router 的参数是：{{this.$route.params.data}}<br>

    store 的数字是：{{getNum}}<br>
    store 的地址是：{{getLocation}}<br>
    

    <button @click="plus">plus</button>
    <button @click="minus">minus</button>
    <button @click="changeLocation">changeLocation</button>
    <button @click="incA">incAction</button>
    <button @click="decA">decAction</button>
    <hr>

    用 map... 函数来操作：<br>
    <button @click="inc">inc</button>
    <button @click="dec">dec</button>
    <button @click="incAction">incAction</button>
    <button @click="decAction">decAction</button>

    <br>

    mapState 获取的数据是：<br>
    {{num}}__{{location}}
    <hr>
    mapGetters 获取的数据是： <br>
    {{getNum}}__{{getLocation}}
    <hr>

    store 里的天气是：<br>
    moduleA: {{this.$store.state.moduleA.today}}<br>
    moduleB: {{this.$store.state.moduleB.today}}<br>

    <hr>

    来自父组件：
    {{msg}}
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';

export default {
  name: 'HelloWorld',
  props: ['msg'],
  data(){
    return {
      money: '8877$'
    }
  },
  computed: {
    getNum(){
      return this.$store.getters.getNum
    },
    getLocation(){
      return this.$store.getters.getLocation
    },
    ...mapGetters(['getNum', 'getLocation']),
    ...mapState(['num', 'location'])
  },
  methods: {
    sendToF(){
      this.$emit('handle', this.money)
    },
    plus(){
      this.$store.commit('inc')
    },
    minus(){
      this.$store.commit('dec')
    },
    changeLocation(){
      this.$store.commit('CHANGE')
    },
    incA(){
      this.$store.dispatch('incAction')
    },
    decA(){
      this.$store.dispatch('decAction')
    },
    ...mapMutations(['inc', 'dec', 'CHANGE']),
    ...mapActions(['incAction', 'decAction'])
  }
}
</script>

<style scoped>

</style>
