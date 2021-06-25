

export default {
    namespaced: true,

    state: {
        list: [],
        item: {}
    },

    mutations: {
        ADD_ITEM(state,title){
            state.list.push(title)
        },
        EDIT_ITEM(state,id){
           var index =  state.list.findIndex((p) => p.id == id);
            state.item = state.list[index];
        },
        UPDATE_ITEM(state,title){
          var index =  state.list.findIndex((p) => p.id == title.id);
          state.item = state.list[index];
        },
        DELETE_ITEM(state,id){
           var index =  state.list.findIndex((p) => p.id == id);
           if(index !== -1){
               state.list.splice(index,1);
           }
        }
    },

    actions: {
        store(context, payload) {
            context.commit("ADD_ITEM", payload);
        },

        show(context,id){
            context.commit('EDIT_ITEM',id)
        },

        update(context,title){
            context.commit('UPDATE_ITEM',title)
        },

        delete(context,id){
            context.commit('DELETE_ITEM',id)
        }


    },
    getters: {
        list:(state) => state.list,
        item:(state) => state.item
    }
};
