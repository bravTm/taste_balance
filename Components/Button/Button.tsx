import { FC } from 'react'

interface IButton {
    title: string
    onClick: () => void
}

const Button:FC<IButton> = ({ title, onClick }) => {

    return (
        <div className='w-[50%] flex justify-center items-center bg-[#79793F] cursor-pointer p-[2%] rounded-sm
        mt-[5%] mb-[4%] hover:bg-[#78864B] transition-all text-white'
            onClick={onClick}
        >
            <p>
                {title}
            </p>
        </div>
    )
}

export default Button
