<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{titleList.name}}</v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>

        <v-btn icon color="green">
          <slot name="edit" :editTitleSlot="titleEdit">
            <v-icon @click="titleEdit(titleList.id)">mdi-lead-pencil</v-icon>
          </slot>
        </v-btn>

        <v-btn icon color="red">
          <slot name="delete" :deleteTitleSlot="titleDelete">
            <v-icon @click="titleDelete(titleList.id)">mdi-delete-alert</v-icon>
          </slot>
        </v-btn>

        <v-btn icon color="blue-grey lighten-4">
          <slot name="copy" :copyTitleSlot="titleCopy">
            <v-icon @click="titleCopy(titleList)">mdi-content-copy</v-icon>
          </slot>
        </v-btn>
      </v-list-item>
    </v-list>

    <v-dialog v-model="deleteDialog" persistent max-width="600">
      <v-card>
        <v-card-title color="red lighten-1">confirm delete this title please enter "DELETE"</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field v-model="deleteTitle" @change="btnDisable()" label="DELETE" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn color="red"  @click="deleteDialog = false">Close</v-btn> -->
            <v-btn
              color="blue"
              :disabled="disableDelete"
              @click="deleteConfim(title_item.id)"
            >Confirm</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";
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

  computed: {
    ...mapGetters("Title", {
      title_lists: "list",
      title_item: "item",
    }),
  },

  methods: {
    ...mapActions("Title", {
      title_store: "store",
      title_edit: "show",
      title_update: "update",
      title_delete: "delete",
    }),

    titleEdit(id) {
      this.editDialog = true;
      this.title_edit(id);
      console.log(this.title_item);
    },

    titleDelete(id) {
      this.deleteDialog = true;
      this.title_edit(id);
    },
    btnDisable() {
      if (this.deleteTitle === this.confirmDelete && this.deleteTitle !== "") {
        this.disableDelete = false;
      } else {
        this.disableDelete = true;
      }
    },

    btnDisableSave() {
      if (this.deleteTitle === this.confirmDelete && this.deleteTitle !== "") {
        this.disableDelete = false;
      } else {
        this.disableDelete = true;
      }
    },

    deleteConfim(id) {
      this.title_delete(id);
      this.deleteDialog = false;
    },

    titleCopy(item) {
      console.log(item.id);
      var dummyid = uuidv4();
      console.log(item.id, dummyid);
      dummyid = item.id;
      this.title_store(item);
    },

    titleUpdate(item) {
      if (item.name !== "") {
        this.editDialog = false;
        this.title_update(this.title_item);
      }
    },
  },
};
</script>

