import { FC } from 'react'

interface IInput {
    text: string
    handleChange: (event: Event) => void
}

const Input:FC<IInput> = ({ text, handleChange }) => {
    return (
        <input
            type="text"
            id="name"
            value={text}
            onChange={(e) => handleChange(e)}
            placeholder="Имя"
            required

            className='w-[80%] bg-[#F0F1F1] border-[1px] h-[9%] rounded-lg p-[2%]
            hover:bg-[#e3e8e8] transition-all'
        />
    )
}

export default Input