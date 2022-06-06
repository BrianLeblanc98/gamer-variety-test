<template>
<div class='body'>
    <h1>Gamer Variety Test</h1>
    <h4>This is a test to see what your variety of game franchises is. The list is largely adapted from <a href='https://en.wikipedia.org/wiki/List_of_best-selling_video_game_franchises'>Wikipedia's list of best-selling video game franchises</a></h4>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang='scss' scoped>
$linkColor: #AFAFFF;
.body {
    text-align: center;
    background: rgb(4, 0, 20);
}

h1 {
    margin-top: 0px;
}

a:link {
    text-decoration: none;
    color: $linkColor;
}

a:visited {
    text-decoration: none;
    color: $linkColor;
}

a:hover {
    text-decoration: underline;
    color: $linkColor;
}

a:active {
    text-decoration: underline;
    color: $linkColor;
}
</style>