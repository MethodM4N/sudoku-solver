<template>
  <section class="main">
    <h1>Данное веб приложение решит за вас Судоку.</h1>
    <form class="form" @submit.prevent="onSubmit">
      <div>
        <h2>Задача</h2>
        <div class="form__set-grid" v-for="(gameGrid, index) in gameGrid" :key="index">
          <input
            autofocus
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
        <div class="form__error-message" v-if="this.solvedGrid === false">
          <h3>Не возможно найти решение, проверьте условия задачи</h3>
        </div>
        <div class="form__solved-grid" v-for="(gameGrid, index) in solvedGrid" :key="index">
          <p v-for="square in gameGrid">{{ square }}</p>
        </div>
      </div>
      <button type="submit">Решить</button>
      <button @click="onReset">Сбросить значения</button>
    </form>
  </section>
</template>

<script>
import solveSudokuAlgorithm from '@/assets/solveSudokuAlgorithm.js';
import initialGrid from '@/assets/initialGrid.js';

export default {
  name: 'Main',
  data() {
    return {
      gameGrid: [...initialGrid],
      solvedGrid: [],
    };
  },
  methods: {
    onSubmit() {
      this.solvedGrid = solveSudokuAlgorithm(this.gameGrid);
    },
    onReset() {
      this.gameGrid = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
      ];
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

  .form {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 100px;

    @media (max-width: 765px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 170px;
      gap: 20px;
    }

    h2 {
      margin: 0 auto 10px;
      text-align: center;
      position: relative;
    }

    button {
      padding: 10px 20px;
      position: absolute;
      bottom: -70px;
      cursor: pointer;

      &:last-of-type {
        bottom: -130px;
      }
    }

    &__set-grid {
      display: flex;
      position: relative;
      max-width: 328px;

      input {
        padding: 2px 1px;
        width: 32px;
        outline: none;
        font-size: 20px;
        border: 1px solid rgba(0, 0, 0, 0.459);

        &:last-child {
          border-right: 3px solid black;
        }
        &:first-child {
          border-left: 3px solid black;
        }
      }

      &:first-of-type {
        border-top: 2px solid black;

        &:before {
          content: '';
          display: block;
          background-color: black;
          height: 265px;
          width: 3px;
          position: absolute;
          top: -2px;
          right: 108px;
          z-index: 1;
        }

        &:after {
          content: '';
          display: block;
          background-color: black;
          height: 3px;
          width: 325px;
          position: absolute;
          top: 86px;
          z-index: 1;
        }
      }

      &:last-of-type {
        border-bottom: 2px solid black;

        &:before {
          content: '';
          display: block;
          background-color: black;
          height: 3px;
          width: 325px;
          position: absolute;
          bottom: 85px;
          z-index: 1;
        }

        &:after {
          content: '';
          display: block;
          background-color: black;
          height: 263px;
          width: 3px;
          position: absolute;
          bottom: 0;
          right: 216px;
          z-index: 1;
        }
      }
    }

    &__solved-grid {
      display: flex;
      justify-content: center;
      border-right: 2px solid black;
      border-left: 2px solid black;
      position: relative;
      max-width: 303px;

      &:first-of-type {
        border-top: 2px solid black;

        &:before {
          content: '';
          display: block;
          background-color: black;
          height: 265px;
          width: 3px;
          position: absolute;
          top: -2px;
          right: 98px;
        }

        &:after {
          content: '';
          display: block;
          background-color: black;
          height: 3px;
          width: 302px;
          position: absolute;
          top: 85px;
        }
      }

      &:last-of-type {
        border-bottom: 2px solid black;

        &:before {
          content: '';
          display: block;
          background-color: black;
          height: 3px;
          width: 302px;
          position: absolute;
          bottom: 85px;
        }

        &:after {
          content: '';
          display: block;
          background-color: black;
          height: 263px;
          width: 3px;
          position: absolute;
          bottom: 0;
          right: 198px;
        }
      }

      p {
        border: 1px solid rgba(0, 0, 0, 0.459);
        margin: 0;
        padding: 2px 10px;
        font-size: 20px;
      }
    }

    &__error-message {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 190px;
      height: 80%;
      text-align: center;

      h3 {
        font-size: 20px;
        font-weight: 400;
        color: red;
      }
    }
  }
}
</style>
