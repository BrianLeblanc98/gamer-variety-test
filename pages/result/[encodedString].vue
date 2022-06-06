<template>
<div class='body'>
    <h1 v-if='!isValid'>
        INVALID FORM
    </h1>
    <div v-if='isValid'>
        <h2>RESULT: {{ selectedGames.length }}/100</h2>
        <button @click='share'>Share</button>
        <ol class='game-list'>
            <li v-for='game in games'>
                <input type='checkbox' :id='game.name' :value='game' v-model='selectedGames' disabled>
                <label>{{ game.name }}</label>
            </li>
        </ol>
    </div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

/*
Gamer Variety Score:
69/100
nice

Here's what I played: gamervarietytest.com/result/PwcLg_9jgAN78AAAA
*/
export default defineComponent({
    name: "ResultPage",
    head() {
        return {
            title: "Gamer Variety Test - Results"
        };
    },
    data() {
        return {
            encodedString: this.$route.params.encodedString as string,
            decodedNumber: BigInt(0),
            isValid: true,
            games: GAMES,
            selectedGames: []
        };
    },
    mounted() {
        window.scrollTo(0, 0)
        this.decodedNumber = DECODE(this.encodedString);
        if (this.decodedNumber > MAX_ID || this.decodedNumber < 0) {
            this.isValid = false;
        }
        let binaryArray = [...this.decodedNumber.toString(2).padStart(100, "0")];
        this.games.forEach((game) => {
            let isSelected = parseInt(binaryArray[game.index]);
            if (isSelected) {
                this.selectedGames.push(game);
            }
        });
    },
    methods: {
        share() {
            navigator.clipboard
                .writeText(`${ROOT_URL}/result/${this.encodedString}`)
                .then(() => {
                    alert("Result copied to clipboard");
                });
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