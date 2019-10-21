<template>
    <v-container>
        <v-layout column="">
            <h1 class="title my-3">My Recipes</h1>
            <div 
            class="subheading mb-2" 
            v-for="(item, idx) in userRecipes" 
            :key="idx">
            {{item.recipe}}
            </div>
            <v-flex mt-4>
                <v-btn color="primary" to="/menu">Go To Menu</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'About',
    //loads the recipes when page loads
    mounted(){
        this.getRecipes();
    },
    //return recipes from state in store
    computed:{
        userRecipes(){
            return this.$store.state.userRecipes;
        }
    },
    methods:{
        getRecipes(){
            this.$store.dispatch('getUserRecipes');
        }
    },
    
};
</script>
<style scoped></style>
