<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="brown lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index">
                        <v-list-item-content>{{
                            item.title
                        }}</v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar color="brown darken-4" dark>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
            </router-link>

            <v-btn color="brown" class="hidden-sm-and-down" to="/menu"
                >Menu</v-btn
            >
            <v-spacer class="hidden-sm-and-down"></v-spacer>

            <v-btn text class="hidden-sm-and-down" to="/signin">SIGN IN</v-btn>

            <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/join"
                >JOIN</v-btn
            >
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data: () => ({
        appTitle: 'Meal Prep',
        drawer: false,
        items: [
            { title: 'Menu' },
            { title: 'Profile' },
            { title: 'Sign In' },
            { title: 'Join' }
        ]
    })
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
