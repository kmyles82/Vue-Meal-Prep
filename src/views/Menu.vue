<template>
    <v-container fluid>
        <v-layout row wrap>
            <HomePlans/>
            <MealRecipes/>
        </v-layout>
    </v-container>
</template>
<script>
import MealRecipes from '../components/MealRecipes'
import HomePlans from '../components/HomePlans'
export default {
    name: 'Menu',
    components:{
        MealRecipes,
        HomePlans
    }
};
</script>
<style scoped></style>
