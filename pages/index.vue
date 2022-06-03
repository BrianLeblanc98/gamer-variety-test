<template>
<div class='body'>
    <div>
        <span v-for='game in games'>
            <input type='checkbox' :id='game.name' :value='game' v-model='selectedGames'>
            <label>{{ game.name }}</label>
            <br>
        </span>
        <br>
        <button @click='submitForm'>Submit</button>
    </div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

interface Game {
    name: string;
    index: number;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
// const MAX_ID = BigInt('0b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
const GAME_NAMES_ORDERED = [
    'Mario',
    'Tetris',
    'Pokemon',
    'Call of Duty',
    'Grand Theft Auto',
    'FIFA',
    'Minecraft',
    'Lego',
    'Wii (Wii Sports, Wii Sports Resort, Wii Play)',
    'The Sims',
    'Final Fantasy',
    'Assasin\'s Creed',
    'Need for Speed',
    'Sonic',
    'Madden NFL',
    'The Legend of Zela',
    'Resident Evil',
    'Star Wars',
    'NBA 2K',
    'Tomb Raider',
    'Grand Turismo',
    'Dragon Quest',
    'Tom Clancy\'s',
    'Halo',
    'Monster Hunter',
    'Worms',
    'Mortal Kombat',
    'Borderlands',
    'Animal Crossing',
    'Just Dance',
    'Super Smash Bros.',
    'Dragon Ball',
    'Red Dead',
    'Donkey Kong',
    'The Oregon Trail',
    'WWE 2K',
    'The Elder Scrolls',
    'Metal Gear',
    'Battlefield',
    'Civilization',
    'Tekken',
    'God of War',
    'Bejeweled',
    'Far Cry',
    'Diablo',
    'The Witcher',
    'Crash Bandicoot',
    'Street Fighter',
    'Pac-Man',
    'Uncharted',
    'Guitar Hero',
    'Harry Potter',
    'Medal of Honor',
    'Kirby',
    'Fallout',
    'Total War',
    'Mega Man',
    'BioShock',
    'Counter-Strike',
    'Kingdom Hearts',
    'Football Manager',
    'Souls',
    'Saints Row',
    'Gundam',
    'James Bond',
    'Tony Hawk\'s',
    'Command & Conquer',
    'The Walking Dead',
    'Nintendogs',
    'Half-Life',
    'Ratchet & Clank',
    'Gears of War',
    'Rayman',
    'Tales',
    'Age of Empires',
    'Devil May Cry',
    'The Last of Us',
    'Batman',
    'Yu-Gi-Oh!',
    'Spider-Man',
    'Microsoft Flight Simulator',
    'Prince of Persia',
    'Castlevania',
    'Frogger',
    'Lemmings',
    'SpongeBob SquarePants',
    'Spyro',
    'Mass Effect',
    'SimCity',
    'Watch Dogs',
    'Rock Band',
    'Portal',
    'Metroid',
    'DOOM',
    'Midnight Club',
    'Skate',
    'Team Fortress',
    'Dead Space',
    'Candy Crush',
    'Angry Birds'
]
const GAMES: Game[] = GAME_NAMES_ORDERED.map((name) => {
    return {
        name: name,
        index: GAME_NAMES_ORDERED.indexOf(name)
    }
})

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
            selectedGames: [] as Game[]
        };
    },
    methods: {
        encode(num: bigint): string {
            let length = BigInt(ALPHABET.length);
            let result = [];
            do {
                let r = Number(num % length);
                num = num / length;
                result.unshift(ALPHABET[r]);
            } while (num > BigInt(0));
            return result.join("");
        },
        submitForm() {
            this.selectedGamesBinaryArray = Array(100).fill(0);
            this.selectedGames.forEach((game) => {
                this.selectedGamesBinaryArray[game.index] = 1;
            });
            let encodedString = this.encode(BigInt(`0b${this.selectedGamesBinaryArray.join("")}`));
            this.$router.push(`/result/${encodedString}`);
        }
    }
})
</script>

<style lang='scss' scoped>
</style>