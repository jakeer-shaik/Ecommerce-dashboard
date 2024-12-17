import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  increseByValue,
  decreseByValue,
} from "../features/slice";
import { useState } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [customValue, setCustomValue] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Counter</h1>

      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          -1
        </button>

        <span className="text-2xl font-semibold">{count}</span>

        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          +1
        </button>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="number"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          className="w-20 px-2 py-1 text-center border border-gray-300 rounded"
        />

        <button
          onClick={() => dispatch(increseByValue(Number(customValue)))}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increse by {customValue}
        </button>

        <button
          onClick={() => dispatch(decreseByValue(Number(customValue)))}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Decrease by {customValue}
        </button>
      </div>
    </div>
  );
};

export default Counter;
