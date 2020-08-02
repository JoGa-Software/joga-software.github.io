<template>
    <div class = "hello">
        <h1>(404) Page NotFound</h1>
    </div>
</template>
<script>
import router from '../router/router'

export default {
    mounted() {
        console.log(router.currentRoute.path);
    },
}
</script>