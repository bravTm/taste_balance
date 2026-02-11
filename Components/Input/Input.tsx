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
            // eslint-disable-next-line
            // @ts-ignore
            onChange={(e) => handleChange(e)}
            placeholder="Имя"
            required

            className='w-[80%] bg-[#EEE8BF] border-[1px] h-[9%] rounded-lg p-[2%]
            hover:bg-[#ded8b1] transition-all'
        />
    )
}

export default Input
