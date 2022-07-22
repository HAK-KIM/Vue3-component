<template>
  <section>
    <friend-nav/>
    <friend-form @addFriendCard = 'addfriend'></friend-form>
    <friend-card
      v-for="friend of friends"
      :key="friend.id"
      :friend="friend"
      @deleteFriend="removefriend"
    ></friend-card>
  </section>
</template>

<script>
export default {
  name:'App',
  data() {
    return {
      
    
      friends: [
        {
          id: "manuel",
          firstName: "Manuel",
          lastName: "Lorenz",
          comment: "good boy",
        },
        {
          id: "manuel",
          firstName: "Ronan",
          lastName: "Oger",
          comment: "The best",
        },
      ],
    };
  },
  methods: {
    removefriend(friendId) {
      for (let friend of this.friends) {
        let index = this.friends.indexOf(friend);
        if (friend.id === friendId) {
          this.friends.splice(index, 1);
        }
      }
    },
    addfriend(fname,lname,comment){
      
      
      if(fname != "" && lname != "" && comment != ""){
        this.friends.push({firstName:fname, lastName: lname, comment:comment})
      }
      
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}


</style>


