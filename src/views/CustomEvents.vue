<template>
  <div>
    <h2 class="text-h4">Custom Events</h2>
    <v-divider class="grey lighten-3 my-6"></v-divider>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card v-for="title_list in this.title_lists" :key="title_list.id">
              <TitleList :titleList="title_list">
                <template v-slot:edit="{editTitleSlot}">
                  <v-icon @click="editTitleSlot(title_list.id)">mdi-lead-pencil</v-icon>
                </template>
                <template v-slot:delete="{deleteTitleSlot}">
                  <v-icon @click="deleteTitleSlot(title_list.id)">mdi-delete-alert</v-icon>
                </template>
                <template v-slot:copy="{copyTitleSlot}">
                  <v-icon @click="copyTitleSlot(title_list)"> mdi-content-copy</v-icon>
                </template>
              </TitleList>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="6">
            <v-text-field label="Title" v-model="title.name" placeholder="Title" outlined></v-text-field>
            <v-btn class="mx-auto" dark color="indigo" @click="addTitle()">add title</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-dialog v-model="editDialog" persistent max-width="600">
      <v-card>
        <v-card-title>Title Name</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  label="Title"
                  v-model="title_item.name"
                  @change="btnDisableSave()"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn color="red" dark @click="editDialog = false">Close</v-btn> -->
            <v-btn color="blue" dark @click="titleUpdate(title_item)">Save</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

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
import TitleList from "../components/TitleList.vue";
import { mapGetters, mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    TitleList,
  },
  data() {
    return {
      title: {
        name: "",
        id: "",
      },
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

    addTitle() {
      this.title.id = uuidv4();
      console.log(this.title);
      this.title_store(this.title);
      this.title = {
        name: "",
        id: "",
      };
    },

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
      item.id = uuidv4();
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
