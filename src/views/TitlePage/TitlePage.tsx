import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { setDifficulty } from '../../redux/titleSlice'

const TitlePage = () => {
    const { difficulty } = useSelector((state: RootState) => state.title);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setDifficulty('xd'))
        console.log(difficulty)
    }

    return (
        <div>
            <h1 >xd</h1>
            <select>
                <option>easy</option>
                <option>hard</option>
            </select>
            <input type='number' placeholder='give number' />
            <button type='button' onClick={handleClick}>xd</button>
        </div>
    )
}


export default TitlePage