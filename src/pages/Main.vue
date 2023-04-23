<template>
  <section class="main">
    <h1>Данное веб приложение решит за вас Судоку.</h1>
    <form class="main__content" @submit.prevent="onSubmit">
      <div>
        <h2>Задача</h2>
        <div class="main__set-grid" v-for="(gameGrid, index) in gameGrid" :key="index">
          <input
            v-for="(square, index) in gameGrid"
            type="number"
            min="0"
            max="9"
            v-model.number="gameGrid[index]"
          />
        </div>
      </div>
      <div>
        <h2>Решение</h2>
        <div class="main__solved-grid" v-for="(gameGrid, index) in solvedGrid" :key="index">
          <p v-for="square in gameGrid">{{ square }}</p>
        </div>
      </div>
      <button type="submit">Решить</button>
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
  methods: {
    onSubmit() {
      this.solvedGrid = solveSudokuAlgorithm(this.gameGrid);
    },
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
    position: relative;
    display: flex;
    justify-content: center;
    gap: 100px;

    p {
      margin: 0;
      padding-left: 10px;
      font-size: 20px;
    }

    h2 {
      margin: 0 auto 10px;
      text-align: center;
    }

    button {
      padding: 10px 20px;
      position: absolute;
      bottom: -70px;
    }
  }

  &__set-grid {
    display: flex;

    input {
      width: 32px;
    }
  }

  &__solved-grid {
    display: flex;
  }
}
</style>
