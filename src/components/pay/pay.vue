<template>
  <div class="n-hot">
    <morelist></morelist>
    <answerlist></answerlist>
    <paylist></paylist>
    <morelist></morelist>
    <answerlist></answerlist>
    <paylist></paylist>
    <answerlist></answerlist>
    <paylist></paylist>
    <morelist></morelist>
    <answerlist></answerlist>
    <paylist></paylist>
    <answerlist></answerlist>
    <paylist></paylist>
    <morelist></morelist>
    <answerlist></answerlist>
    <paylist></paylist>
    <answerlist></answerlist>
    <paylist></paylist>
    <morelist></morelist>
    <answerlist></answerlist>
    <paylist></paylist>
  </div>
</template>

<script>
import Answerlist from "../answerlist/answerlist";
import Paylist from "../paylist/paylist";
import Morelist from '../morelist/morelist'
export default {
  components: {
    Answerlist,
    Paylist,
    Morelist
  }
};
</script>

<style scoped>
.n-hot {
  width: 100%;
}
</style>
