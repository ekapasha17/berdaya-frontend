<template>
  <div id="register">
    <template id="step1" v-if="!seen">
      <h1>Step 1</h1>
      <div>
        <input type="text" name="name" placeholder="name">
      </div>
      <div>
        <input type="text" name="email" placeholder="email">
      </div>
      <button type="button" v-on:click="seen = !seen">Continue</button>
    </template>
    <template id="step2" v-if="seen">
      <h1>Step 2</h1>
      <div>
        <input type="text" name="city" placeholder="city">
      </div>
      <div>
        <input type="text" name="state" placeholder="state">
      </div>
      <button v-on:click="seen = !seen" type="button">Back</button>
      <button type="button">Finish</button>
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Register',
  data () {
    return {
      seen: false
    }
  }
}

var app = new Vue({
  el: document.getElementById('register')
})

console.log(app)
</script>
