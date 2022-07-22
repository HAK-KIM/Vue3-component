<template>
   
        <form action="" @submit.prevent="setInfo">
            <input type="text" placeholder="First Name" v-model="firstName">
            <input type="text" placeholder="Last Name" v-model="lastName">
            <input type="text" placeholder="Comment" v-model="comment">
            <button class="btn" type="submit">ADD</button>
        </form>

</template>

<script>
export default {
  name: 'friend-form',
  emits: ["addFriendCard"],
  data() {
    return {
      
        firstName: '',
        lastName: '',
        comment: '',
      
    };
  },
  methods: {
    setInfo() {
      this.$emit("addFriendCard",
      this.firstName,
      this.lastName,
      this.comment,
      );
    },
  },
};
</script>

<style>

form{
    display: grid;
    width: 30%;
    margin: 20px auto;
    
    
}
form input{
    margin-bottom: 20px;
}
input{
    padding: 20px;
    font-family: sans-serif;
    font-size: large;
}
form .btn{
    padding: 20px;
    background: gray;
}
</style>