<template>
  <div class="n-tag">
    <h2>所有标签</h2>
    <button @click="shuffle">打乱顺序</button>
    <transition-group name="cell" tag="div" class="container">
      <div v-for="cell in cells" :key="cell.id" class="cell">
        {{cell.number}}
      </div>
    </transition-group>
  </div>
</template>

<script>
// 要引入lodash.js
import _ from "lodash/lodash";
export default {
  data() {
    return {
      cells: Array.apply(null, {
        length: 81
      }).map(function(_, index) {
        return {
          id: index,
          number: index % 9 + 1
        };
      })
    };
  },
  methods: {
    shuffle() {
      this.cells = _.shuffle(this.cells);
    }
  }
};
</script>

<style scoped>
.n-tag {
  background: #fff;
  padding: 20px;
  margin: 0 auto;
}
h2 {
  height: 60px;
}
button {
  padding: 2px 4px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 570px;
  margin: 0 auto;
  margin-top: 10px;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60px;
  height: 30px;
  border: 1px solid #aaa;
}
.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}
</style>
