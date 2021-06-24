<template>
    <li class="action-item">
         <button class="button is-primary is-medium" @click="changeMsg(1)">Click to change welcome message</button>
        
    </li>
</template>

<script>
    export default {
        props: ['records', 'url'],
        methods: {
            changeMsg(id) {
               this.$emit("changeMsg", id);
            }
        }
    }
</script>