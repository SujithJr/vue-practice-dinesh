<template>
    <div>
     <ChildComp @changeMsg="setMessage"></ChildComp>
    </div>
</template>
<script>
import ChildComp from '../components/ChildCom.vue'
export default {
    components:{
        ChildComp
    },
    data(){
        return{
            
        }
    },
    methods:{
        setMessage(name){
            console.log(name);  
        }
    }
}
</script>