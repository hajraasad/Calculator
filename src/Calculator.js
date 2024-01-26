import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  setNum,
  equals,
  multiply,
  divide,
  clearAll,
} from "./CalculatorSlice";

const Calculator = () => {
  const { total } = useSelector((state) => state);
  const { numVal } = useSelector((state) => state);

  const dispatch = useDispatch();

  const updateTotal = (num) => {
    dispatch(setNum(num));
  };

  const sum = (param) => {
    dispatch(increment(param));
  };

  const minus = (param) => {
    dispatch(decrement(param));
  };

  const multiplyFunction = (param) => {
    dispatch(multiply(param));
  };

  const divideFunction = (param) => {
    dispatch(divide(param));
  };

  const triggerEquals = () => {
    dispatch(equals());
  };

  const clear = () => {
    dispatch(clearAll());
  };

  return (
    <div>
      {numVal ? <p>Value: {numVal}</p> : <p> Calculated Value: {total}</p>}

      <div>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(7);
            }}
          >
            7
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(8);
            }}
          >
            8
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(9);
            }}
          >
            9
          </button>
        </span>
      </div>
      <div>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(4);
            }}
          >
            4
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(5);
            }}
          >
            5
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(6);
            }}
          >
            6
          </button>
        </span>
      </div>
      <div>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(1);
            }}
          >
            1
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(2);
            }}
          >
            2
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(3);
            }}
          >
            3
          </button>
        </span>
      </div>

      <div>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              sum("+");
            }}
          >
            +
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              minus("-");
            }}
          >
            -
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              multiplyFunction("*");
            }}
          >
            x
          </button>
        </span>
      </div>
      <div>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              divideFunction("/");
            }}
          >
            /
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              updateTotal(0);
            }}
          >
            0
          </button>
        </span>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => triggerEquals()}
          >
            =
          </button>
        </span>
      </div>
      <div>
        <span>
          <button
            style={{ height: "100px", width: "100px" }}
            onClick={() => {
              clear();
            }}
          >
            AC
          </button>
        </span>
      </div>
    </div>
  );
};
export default Calculator;
