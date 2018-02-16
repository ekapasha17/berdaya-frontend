<template>
  <div id="register">
    <template id="step1" v-if="currentStep == 1">
      <h1>Step 1</h1>
      <div>
        <input type="text" name="name" v-model="step1.name" placeholder="name">
      </div>
      <div>
        <input type="text" name="email" v-model="step1.email" placeholder="email">
      </div>
      <button type="button" @click.prevent="goToStep(2)">Continue</button>
    </template>
    <template id="step2" v-if="currentStep == 2">
      <h1>Step 2</h1>
      <div>
        <input type="text" name="city" v-model="step2.city" placeholder="city">
      </div>
      <div>
        <input type="text" name="state" v-model="step2.state" placeholder="state">
      </div>
      <button type="button" @click.prevent="goToStep(3)">Finish</button>
    </template>
    <template id="step3" v-if="currentStep == 3">
      <strong>Name:</strong> {{ step1.name }}<br />
      <strong>Email:</strong> {{ step1.email }}<br />
      <strong>City:</strong> {{ step2.city }}<br />
      <strong>State:</strong> {{ step2.state }}
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Register'
}
Vue.component('step1', {
  template: '#step1',
  props: [
    'currentStep',
    'step1'
  ]
})

Vue.component('step2', {
  template: '#step2',
  props: [
    'currentStep',
    'step2'
  ]
})

Vue.component('step3', {
  template: '#step3',
  props: [
    'currentStep',
    'step1',
    'step2'
  ]
})

var app = new Vue({
  el: '#register',
  data: {
    currentStep: 1,
    step1: {
      name: '',
      email: ''
    },
    message: ''
  }
})
</script>
