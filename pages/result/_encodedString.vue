<template>
<div>
    <h1 v-if='!isValid'>
        INVALID FORM
    </h1>
    <div v-if='isValid'>
        <h1>Gamer Variety Test</h1>
        <h4>This is a test to see what your variety of game franchises is. The list is largely adapted from <a href='https://en.wikipedia.org/wiki/List_of_best-selling_video_game_franchises'>Wikipedia's list of best-selling video game franchises</a></h4>
        <h2>RESULT: {{ this.selectedGames.length }}/100</h2>
        <span v-for='game in games'>
            <input type='checkbox' :id='game' :value='game' v-model='selectedGames' disabled>
            <label>{{ game.name }}</label>
            <br>
        </span>
    </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue'

interface Game {
    name: string;
    index: number;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
const MAX_ID = BigInt('0b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
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
/*
Gamer Variety Score:
69/100
nice

Here's what I played: gamervarietytest.com/result/PwcLg_9jgAN78AAAA
*/
export default Vue.extend({
    name: 'ResultPage',
    async asyncData({ params }) {
        return {
            encodedString: params.encodedString
        }
    },
    data() {
        return {
            encodedString: '',
            decodedNumber: BigInt(0),
            isValid: true,
            games: GAMES,
            selectedGames: [] as Game[]
        }
    },
    mounted() {
        this.decodedNumber = this.decode(this.encodedString)
        if (this.decodedNumber > MAX_ID || this.decodedNumber < 0) {
            this.isValid = false
        }

        let binaryArray = [...this.decodedNumber.toString(2).padStart(100, '0')]
        this.games.forEach((game) => {
            let isSelected = parseInt(binaryArray[game.index])
            if (isSelected) {
                this.selectedGames.push(game)
            }
        })
    },
    methods: {
        bigIntPower(base: number, exp: number): bigint {
            let result = BigInt(1)
            for(let i = 0; i < exp; i++) {
                result *= BigInt(base)
            }
            return result
        },
        decode(str: string): bigint {
            let base = ALPHABET.length
            let arr = [...str]
            let result = BigInt(0)
            while (arr.length > 0) {
                let d = BigInt(ALPHABET.indexOf(arr[0]))
                if (d < 0) {
                    return BigInt(-1)
                }

                let n = arr.length - 1
                result += d * this.bigIntPower(base, n)
                arr.shift()
            }
            return result
        }
    }
})
</script>