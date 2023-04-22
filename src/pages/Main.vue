<template>
  <section class="main">
    <h1>Данное веб приложение решит за вас Судоку.</h1>
    <form class="main__content">
      <div>
        <div class="main__set-grid" v-for="(gameGrid, index) in gameGrid" :key="index">
          <p v-for="square in gameGrid">{{ square }}</p>
        </div>
      </div>
      <div>
        <div class="main__solved-grid" v-for="(gameGrid, index) in solvedGrid" :key="index">
          <p v-for="square in gameGrid">{{ square }}</p>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import solveSudokuAlgorithm from '@/assets/solveSudokuAlgorithm.js';

export default {
  name: 'Main',
  data() {
    return {
      gameGrid: [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
      ],
      solvedGrid: [],
    };
  },
  mounted() {
    this.solvedGrid = solveSudokuAlgorithm(this.gameGrid);
  },
};
</script>

<style lang="scss">
.main {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 30px auto;
    padding: 0;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  &__content {
    display: flex;
    justify-content: center;
    gap: 100px;

    p {
      margin: 0;
      padding-left: 10px;
      font-size: 20px;
    }
  }

  &__set-grid {
    display: flex;
  }

  &__solved-grid {
    display: flex;
  }
}
</style>
