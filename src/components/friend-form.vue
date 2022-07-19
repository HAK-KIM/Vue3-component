<template>
   
        <form action="">
            <input type="text" placeholder="First Name">
            <input type="text" placeholder="Last Name">
            <input type="text" placeholder="Comment">
            <button class="btn" type="submit">ADD</button>
        </form>

</template>

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