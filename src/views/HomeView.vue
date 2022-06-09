<template>
  <div class="home">
   
   <h2>Список заданий</h2>
   <task-card/>
  </div>
</template>

<script>
import TaskCard from '../components/TaskCard.vue';


export default {
  name: 'HomeView',
  components: {
    TaskCard
  }
}
</script>
