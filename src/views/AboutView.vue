<template>
  <div class="about">
    <h2>Здесь Вы можете создать новое задание заполнив соответствующие поля</h2>
    <form id="form" action="" class="create-form" @submit.prevent>
      <input 
      type="text" 
      class="inpt create-title" 
      placeholder="title"
      v-model="this.title"
      >
      <textarea 
      type="text" 
      class="inpt create-text" 
      placeholder="Пункт: 1"
      maxlength="50"
      form="form"
      v-model="this.text"
      >
      </textarea>
      <textarea 
      type="text" 
      class="inpt create-text" 
      placeholder="Пункт: 2"
      maxlength="50"
      form="form"
      v-model="this.text2"
      >
      </textarea>
      <textarea 
      type="text" 
      class="inpt create-text" 
      placeholder="Пункт: 3"
      maxlength="50"
      form="form"
      v-model="this.text3"
      >
      </textarea>

      <div class="btn-wrapper">
        <button 
        class="btn create-btn"
        @click="createTask"
        ><strong>Создать новое задание</strong></button>
      </div>
    </form>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  
  data(){
    return{
      title:'',
      text: '',
      text2: '',
      text3: '',
    }
  },

  methods: {
    ...mapActions(['ADD']),
    createTask(){
      const newTask = {
         id: Date.now(),
         title: this.title,
         text: this.text,
         text2: this.text2,
         text3: this.text3,
         status: false
       };
       this.ADD(newTask);
       this.title = '';
      this.text = '';
      this.text2 = '';
      this.text3 = '';
    }
  },
  
}
</script>

<style >
.create-form{
  width: 930px;
  padding: 20px;
  border: 2px solid #CDCDCD;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.inpt{
  width: 90%;
  border: none;
  border-radius: 8px;
  background-color: #d8d8d8;
  padding: 5px 15px;
margin-bottom: 20px;
}
.inpt:focus{
 outline: none;
  box-shadow: 3px 3px 15px 3px #414141;
}
.create-text{
  height: 50px;
}
.btn-wrapper{
  width: 150px;
}
.create-btn{
  background-color: #F98F1C;
  color: #f8f8f8;
}
</style>
