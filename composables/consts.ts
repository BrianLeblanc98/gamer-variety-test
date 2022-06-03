export const ROOT_URL = 'https://gamer-variety-test.vercel.app'
export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
export const MAX_ID = BigInt('0b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')

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
    'The Legend of Zelda',
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

export const GAMES = GAME_NAMES_ORDERED.map((name) => {
    return {
        name: name,
        index: GAME_NAMES_ORDERED.indexOf(name)
    }
})

const bigIntPower = (base: number, exp: number): bigint => {
    let result = BigInt(1);
    for (let i = 0; i < exp; i++) {
        result *= BigInt(base);
    }
    return result;
}

export const ENCODE = (num: bigint): string => {
    let length = BigInt(ALPHABET.length);
    let result = [];
    do {
        let r = Number(num % length);
        num = num / length;
        result.unshift(ALPHABET[r]);
    } while (num > BigInt(0));
    return result.join("");
}

export const DECODE = (str: string): bigint => {
    let base = ALPHABET.length;
    let arr = [...str];
    let result = BigInt(0);
    while (arr.length > 0) {
        let d = BigInt(ALPHABET.indexOf(arr[0]));
        if (d < 0) {
            return BigInt(-1);
        }
        let n = arr.length - 1;
        result += d * bigIntPower(base, n);
        arr.shift();
    }
    return result;
}