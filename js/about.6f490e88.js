"use strict";(self["webpackChunktodo_vue"]=self["webpackChunktodo_vue"]||[]).push([[443],{704:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=a(252),s=a(963);const r={class:"about"},l=(0,n._)("h2",null,"Здесь Вы можете создать новое задание заполнив соответствующие поля",-1),i={class:"btn-wrapper"},o=(0,n._)("strong",null,"Создать новое задание",-1),c=[o];function x(t,e,a,o,x,h){return(0,n.wg)(),(0,n.iD)("div",r,[l,(0,n._)("form",{id:"form",action:"",class:"create-form",onSubmit:e[5]||(e[5]=(0,s.iM)((()=>{}),["prevent"]))},[(0,n.wy)((0,n._)("input",{type:"text",class:"inpt create-title",placeholder:"title","onUpdate:modelValue":e[0]||(e[0]=t=>this.title=t)},null,512),[[s.nr,this.title]]),(0,n.wy)((0,n._)("textarea",{type:"text",class:"inpt create-text",placeholder:"Пункт: 1",maxlength:"50",form:"form","onUpdate:modelValue":e[1]||(e[1]=t=>this.text=t)},"\n      ",512),[[s.nr,this.text]]),(0,n.wy)((0,n._)("textarea",{type:"text",class:"inpt create-text",placeholder:"Пункт: 2",maxlength:"50",form:"form","onUpdate:modelValue":e[2]||(e[2]=t=>this.text2=t)},"\n      ",512),[[s.nr,this.text2]]),(0,n.wy)((0,n._)("textarea",{type:"text",class:"inpt create-text",placeholder:"Пункт: 3",maxlength:"50",form:"form","onUpdate:modelValue":e[3]||(e[3]=t=>this.text3=t)},"\n      ",512),[[s.nr,this.text3]]),(0,n._)("div",i,[(0,n._)("button",{class:"btn create-btn",onClick:e[4]||(e[4]=(...t)=>h.createTask&&h.createTask(...t))},c)])],32)])}var h=a(907),u={data(){return{title:"",text:"",text2:"",text3:""}},methods:{...(0,h.nv)(["ADD"]),createTask(){const t={id:Date.now(),title:this.title,text:this.text,text2:this.text2,text3:this.text3,status:!1};this.ADD(t),this.title="",this.text="",this.text2="",this.text3=""}}},d=a(744);const p=(0,d.Z)(u,[["render",x]]);var m=p}}]);
//# sourceMappingURL=about.6f490e88.js.map