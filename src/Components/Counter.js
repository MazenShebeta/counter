import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/CounterSlice';
import './Counter.css'


const Counter = () =>{

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.value)

    return(
        <div className='Counter'>
            <h1>Counter</h1>
            <div className='Buttons'>
                <button onClick={() => dispatch(increment())}>+</button>
                <h2>{counter}</h2>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    )

}

export default Counter;