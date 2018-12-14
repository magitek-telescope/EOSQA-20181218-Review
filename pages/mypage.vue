<template>
    <div>
    <h2>My Page</h2>
        <div>{{ $store.state.userAccount }}</div>
        <div>{{ $store.state.balance }}</div>
        <div>{{ $store.state.pub_key }}</div>
        <div>{{ $store.state.prive_key }}</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
