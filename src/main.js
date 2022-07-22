import { createApp } from 'vue'
import App from './App.vue'
import FriendForm from "./components/friend-form.vue"
import FriendNav from "./components/friend-nav.vue"
import FriendCard from "./components/friend-card.vue"
import SubFriendCard from "./components/sub-friendCard.vue"

const app = createApp(App);
app.component('friend-form', FriendForm)
app.component('friend-nav', FriendNav)
app.component('friend-card', FriendCard)
app.component('sub-friendCard', SubFriendCard)
app.mount('#app');
