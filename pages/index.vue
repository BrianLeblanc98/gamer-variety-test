<template>
<div class='body'>
    <div>
        <ol class='game-list'>
            <li v-for='game in games'>
                <input type='checkbox' :id='game.name' :value='game' v-model='selectedGames'>
                <label>{{ game.name }}</label>
            </li>
        </ol>
        <button @click='submitForm'>Submit</button>
    </div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "IndexPage",
    head() {
        return {
            title: "Gamer Variety Test"
        };
    },
    data() {
        return {
            games: GAMES,
            selectedGamesBinaryArray: [] as number[],
            selectedGames: []
        };
    },
    methods: {
        submitForm() {
            this.selectedGamesBinaryArray = Array(100).fill(0);
            this.selectedGames.forEach((game) => {
                this.selectedGamesBinaryArray[game.index] = 1;
            });
            let encodedString = ENCODE(BigInt(`0b${this.selectedGamesBinaryArray.join("")}`));
            this.$router.push(`/result/${encodedString}`);
        }
    }
})
</script>

<style lang='scss' scoped>
.game-list {
    li {
        margin: 4px;
        label {
            margin: 4px;
        }
    }
}
</style>