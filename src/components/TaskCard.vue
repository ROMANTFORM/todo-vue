<template>
<div class="task-card-list">
  
  <div :class="{ready: post.status}" class="task-card-container" v-for="post in this.POSTS" :key="post.id">
    <div >
      <h3>{{ post.title }}</h3>
      <hr>
      <div class="text-wrapper">
        <p>{{ post.text }}</p>
          <input class="check" type="checkbox">
      </div>
      <div v-if="post.text2" class="text-wrapper">
        <p>{{ post.text2 }}</p>
        <input class="check" type="checkbox">
      </div>
      <div v-if="post.text3" class="text-wrapper">
        <p>{{ post.text3 }}</p>
        <input class="check" type="checkbox">
      </div>
      <hr>
    </div>
    <div>
      <button class="btn done" @click="taskReady(post)">&#10004;</button>
      <button class="btn delete" @click="deleteTask(post)">&#10008;</button>
    </div>
    <button class="btn btn-edit" @click="editPost(post)"><strong>Редактировать</strong></button>
  </div>
  <!---------------------- MODAL -------------------->
  <div class="modal" v-if="showModal">
    <form id="form" action="" class="create-form modal-form" @submit.prevent>
      <input 
      type="text" 
      class="inpt create-title" 
      placeholder="title"
      v-model="MODAL.title"
      >
      <textarea 
      type="text" 
      class="inpt create-text" 
      placeholder="Пункт: 1"
      maxlength="50"
      form="form"
      v-model="MODAL.text"
      >
      </textarea>
      <textarea 
      type="text" 
      class="inpt create-text" 
      placeholder="Пункт: 2"
      maxlength="50"
      form="form"
      v-model="MODAL.text2"
      >
      </textarea>
      <textarea 
      type="text" 
      class="inpt create-text" 
      placeholder="Пункт: 3"
      maxlength="50"
      form="form"
      v-model="MODAL.text3"
      >
      
      </textarea>

      <div class="btn-wrapper">
        <button class="btn create-btn edit-ok" @click="editOk"><strong>ok</strong></button>
        <button class="btn create-btn" @click="closeModal(post)"><strong>отмена</strong></button>
      </div>
    </form>
  </div>
</div>
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'TaskCard',
  data(){
    return{
      showModal: false,
    }
  },
  methods: {
    ...mapActions(['DELETE', 'DONE', 'GET_MODAL', 'CURRENT_POST', 'SAVED_POST']),

    taskReady(post){
      this.DONE(post);
    },
    deleteTask(post){
     this.DELETE(post);
    },
    editPost(post){
      this.showModal = true;
      this.CURRENT_POST(post)
      this.GET_MODAL(post);
    },
    editOk(){
      this.showModal = false;
    },
    closeModal(){
      this.SAVED_POST(this.LAST_POST)
      this.showModal = false;
    }
  },
  computed:{
  ...mapGetters(['POSTS', 'MODAL', 'LAST_POST'])
  }
}
</script>


<style lang="scss">
.task-card-list{
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
 
}

.task-card-container{
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
  -webkit-box-shadow: 5px 5px 17px 5px #414141; 
  box-shadow: 5px 5px 17px 5px #414141;
  transition: all 200ms linear;
}

.task-card-container:hover{
  box-shadow: 5px 5px 17px 7px #414141;
  transition: all 200ms linear;
}
.ready{
  box-shadow: 5px 5px 17px 7px #6ca865;
}
.ready:hover{
  box-shadow: 2px 2px 14px 2px #6ca865;
}
.text-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.btn{
  padding: 5px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 200ms linear;
}
.btn-edit{
margin-top: 8px;
background-color: #AFD7F9;
}
.btn:hover{
  opacity: 0.8;
  transition: all 200ms linear;
}
.done{
  background-color: #b6d7a8;
  margin-right: 8px;
}
.delete{
  background-color: #ea9999;
}

.modal{
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(65, 65, 65, 0.7);
 
}
.modal-form{
  position: fixed;
  top: 8%;
  left: 18%;
}
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
  background-color: #fcfcfc;
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
.edit-ok{
background-color: #AFD7F9;
}
</style>
