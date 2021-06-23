<template>
    <v-app>
        <v-main>
            <v-sheet class="c-navbar" width="300" style="position: fixed; left: 0px; height: 100vh; overflow-y: auto; border-right: 2px solid rgba(0,0,0,0.05)">
                <v-list>
                    <v-list-item>
                        <v-list-item-content class="grey--text text--darken-2 text-h6 font-weight-regular">
                            Vue.js Practice
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-for="(link, index)  in links" :key="index" :to="link.path">
                        {{ link.label }}
                    </v-list-item>
                </v-list>
            </v-sheet>
            <v-sheet width="calc(100vw - 312px)" class="ml-auto px-8 mt-8">
                <router-view />
            </v-sheet>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        links: [
            { label: 'Custom Events', path: '/' },
        ]
    })
}
</script>

<style scoped>
.c-navbar a {
    border-bottom: 1px solid #fff !important;
}
.c-navbar .v-list-item--active {
    color: #2e719e !important;
    border-bottom: 1px solid #047083 !important;
}
</style>
