<template>
    <div class="n-recommend">
        <recommendlist></recommendlist>
        <lastedlist></lastedlist>
        <hotestlist></hotestlist>
        <recommendlist></recommendlist>
        <lastedlist></lastedlist>
        <hotestlist></hotestlist>
        <recommendlist></recommendlist>
        <lastedlist></lastedlist>
        <hotestlist></hotestlist>
        <recommendlist></recommendlist>
        <lastedlist></lastedlist>
        <hotestlist></hotestlist>
        <recommendlist></recommendlist>
        <lastedlist></lastedlist>
        <hotestlist></hotestlist>
    </div>
</template>

<script>
import Lastedlist from "../lasted/lastedlist";
import Recommendlist from "./recommendlist";
import Hotestlist from "../hotest/hotestlist";
export default {
  components: {
    Lastedlist,
    Recommendlist,
    Hotestlist
  }
};
</script>

<style scoped>

</style>
