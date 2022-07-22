<template>
  <section>
    <ul class="card">
  
        <h2>{{ friend.firstName }} {{ friend.lastName }}</h2>
        <p>{{ friend.comment}}</p>
       <sub-friendCard
       v-for="skill of skills"
      :key="skill.id"
      :skill="skill"
       ></sub-friendCard>
        <button @click="deleteFriend()">
          Delete
        </button>

       
     
    </ul>
  </section>
</template>

<script>
export default {
  emits: ['deleteFriend'],
  props: {
    friend: {
      type: Object,
      
    },
    
  },
  data() {
    return {
        skills:[
            {
                subject:'HTML',

            }
        ]
        
      
    };
  },
  methods: {
    
    deleteFriend(){
      this.$emit('deleteFriend', this.friend.id)
    }
  },
};
</script>

<style>
.card{
    border: 1px solid;
    width: 35%;
    margin: 10px auto;
    border-radius: 10px;
    background: rgb(189, 186, 186);
    padding: 10px;
}
</style>
