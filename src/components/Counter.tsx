import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { increment, decrement, incrementByAmount } from "../store/reducers/counterReducer";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment By 1</button>
      <button onClick={() => dispatch(incrementByAmount(25))}>Increment By 25</button>
      <button onClick={() => dispatch(decrement())}>Decrement By 1</button>
    </>
  );
};

export default Counter;
