import { useSelector, useDispatch } from 'react-redux';
import { increment, addBy } from '../../redux/counterSlice';

export default function Counter() {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	
	return (
		<>
			{count}
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(addBy(20))}>Add By</button>
		</>
	)
}
