<template>
<div class='body'>
    <TopBar/>
    <NuxtPage/>
</div>
</template>

<style lang='scss'>
html {
    background: #2a3d5f;
    color: #FFF;
}

body {
    margin: 0px;
}

.body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

input[type='checkbox'] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    vertical-align: middle;
    outline: none;
    font-size: inherit;
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
    background: #adf;
    border-radius: 0.25em;
    border: 0.05em solid #555;
    position: relative;
}

input[type='checkbox']:checked {
    background: rgb(101, 90, 255);
}

input[type='checkbox']:checked:after {
    content: "✔";
    position: absolute;
    font-size: 100%;
    left: 0.325em;
    top: -0.0em;
}
</style>