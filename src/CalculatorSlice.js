import { createSlice } from "@reduxjs/toolkit";

const CalculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    num1: "",
    total: 0,
    numVal: "",
    operator: "",
  },
  reducers: {
    increment: (state, param) => {
      let { payload } = param;
      state.numVal = "";
      state.operator = payload;
      if (state.num1) {
        state.total = state.total + parseInt(state.num1);
        state.num1 = "";
      } else {
        return;
      }
    },

    decrement: (state, param) => {
      let { payload } = param;
      state.operator = payload;
      if (parseInt(state.numVal) < 0 && state.total === 0) {
        state.total = parseInt(state.numVal) - state.total; 
        state.num1 = "";
      } else if (parseInt(state.numVal) < 0 && state.total !== 0) {
        let number = parseInt(state.num1) - state.total; 
        state.total = number - number * 2; 
        state.num1 = "";
      } else if (state.num1 && state.total === 0) {
        state.total = parseInt(state.num1);
        state.num1 = "";
      } else if (state.num1 && state.total !== 0) {
        state.total = state.total - parseInt(state.num1);
        state.num1 = "";
      }

      state.numVal = "";
    },

    multiply: (state, param) => {
      let { payload } = param;
      state.numVal = "";
      state.operator = payload;
      if (state.num1) {
        if (state.total === 0) {
          state.total = 1;
          state.total = state.total * parseInt(state.num1);
          state.num1 = "";
        } else {
          state.total = state.total * parseInt(state.num1);
          state.num1 = "";
        }
      } else {
        return;
      }
    },
    divide: (state, param) => {
      let { payload } = param;
      state.numVal = "";
      state.operator = payload;
      if (state.num1 && state.total === 0) {
        let val = 1;
        state.total = parseInt(state.num1) / val;
        state.num1 = "";
      } else if (state.num1 && state.total !== 0) {
        state.total = state.total / parseInt(state.num1);
        state.num1 = "";
      }
    },

    setNum: (state, param) => {
      const { payload } = param;
      let myoperator;
      if(state.operator==='-')
      {
        myoperator=state.operator;
      }

      if (!state.num1) {
        state.num1 = payload;
        state.numVal = myoperator ? myoperator + payload : payload;
      } else if (state.num1) {
        state.num1 = state.num1.toString() + payload;

        state.numVal = myoperator
          ? state.numVal.toString() + payload
          : state.numVal.toString() + payload;
      }
    },

    equals: (state) => {
      if (state.operator === "+") {
        state.total = state.total + parseInt(state.num1);
        state.numVal = "";
        state.num1 = "";
      }
      if (state.operator === "-") {
        if (parseInt(state.numVal) < 0 && state.total === 0) {
          state.total = parseInt(state.numVal) - state.total;
          state.num1 = "";
        } else if (parseInt(state.numVal) < 0 && state.total !== 0) {
          let number = parseInt(state.num1) - state.total;
          state.total = number - number * 2;
          state.num1 = "";
        } else if (state.num1 && state.total === 0) {
          state.total = parseInt(state.num1);
          state.num1 = "";
        } else if (state.num1 && state.total !== 0) {
          state.total = state.total - parseInt(state.num1);
          state.num1 = "";
        }

        state.numVal = "";
      }
      if (state.operator === "*") {
        state.total = state.total * parseInt(state.num1);
        state.numVal = "";
        state.num1 = "";
      }
      if (state.operator === "/") {
        state.total = state.total / parseInt(state.num1);
        state.numVal = "";
        state.num1 = "";
      }
    },

    clearAll: (state) => {
      state.num1 = "";
      state.total = 0;
      state.numVal = "";
      state.operator = "";
    },
  },
});
const { actions, reducer } = CalculatorSlice;
export const {
  increment,
  decrement,
  multiply,
  divide,
  setNum,
  equals,
  clearAll,
} = actions;
export default reducer;
