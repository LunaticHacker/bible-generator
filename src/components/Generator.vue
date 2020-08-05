<template>
 <div>
  <b-form inline>
    <label class="sr-only" for="inline-form-input-name">Starter text</label>
    <b-input v-model="start"
      class="mb-4 mr-sm-2 mb-sm-0"
    ></b-input>
     <b-input v-model="len"
      class="mb-4 mr-sm-2 mb-sm-0"
    ></b-input>
    <b-button @click="generate" variant="primary">Generate</b-button>
  </b-form>
  <div>
  <b-jumbotron class="mt-4">
    <p>{{generated}}</p>
  </b-jumbotron>
</div>
</div>
</template>

<script>
import generateText from '../markov.js'

export default
{

  data() {
    return { start: "Jesus said" ,
    generated:"The Word of Lord will appear here",
    len:"500"};
  },
  methods:{
    async generate(){
   this.generated =await generateText(this.start,+(this.len))
  }} 
}
</script>