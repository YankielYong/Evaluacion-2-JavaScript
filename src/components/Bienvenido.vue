<script>
export default {
    name: "Bienvenido",
    data() {
        return {
            msg: "Bienvenido al Mercado"
        }
    }
}
</script>

<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<style>
h1 {
    font-size: 50px;
    text-align: center;
}
</style>