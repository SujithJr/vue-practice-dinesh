<template>
  <div>
    <h2 class="text-h4">Slot Events</h2>
    <v-divider class="grey lighten-3 my-6"></v-divider>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card v-for="title_list in this.title_lists" :key="title_list.id">
              <SlotComp :titleList="title_list">
                <template v-slot:edit="{editTitleSlot}">
                  <v-icon @click="editTitleSlot(title_list.id)">mdi-lead-pencil</v-icon>
                </template>
                <template v-slot:delete="{deleteTitleSlot}">
                  <v-icon @click="deleteTitleSlot(title_list.id)">mdi-delete-alert</v-icon>
                </template>
                <template v-slot:copy="{copyTitleSlot}">
                  <v-icon @click="copyTitleSlot(title_list)"> mdi-content-copy</v-icon>
                </template>
              </SlotComp>
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
  </div>
</template>

<script>
import SlotComp from '../components/SlotComp.vue'
import { mapGetters, mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    SlotComp,
  },
  data() {
    return {
      title: {
        name: "",
        id: "",
      },
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
  },
};
</script>

