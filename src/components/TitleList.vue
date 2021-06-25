<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{titleList.name}}</v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>

        <v-btn icon color="green">
          <slot name="edit">
            <v-icon @click="titleEdit(titleList.id)">mdi-lead-pencil</v-icon>
          </slot>
        </v-btn>

        <v-btn icon color="red">
          <slot name="delete">
            <v-icon @click="titleDelete(titleList.id)">mdi-delete-alert</v-icon>
          </slot>
        </v-btn>

        <v-btn icon color="blue-grey lighten-4">
          <slot name="copy">
            <v-icon @click="titleCopy(titleList)">mdi-content-copy</v-icon>
          </slot>
        </v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  props: {
    titleList: {
      type: Object,
    },
  },
  data() {
    return {
      confirmDelete: "DELETE",
      disableDelete: true,
      editDialog: false,
      deleteDialog: false,
      deleteTitle: "",
    };
  },
  methods:{

    titleEdit(id){
      this.$emit("edit-title",id)
    },

    titleDelete(id){
      this.$emit("delete-title",id)
    },

    titleCopy(item){
      this.$emit("copy-title",item)
    }
  }
};
</script>

