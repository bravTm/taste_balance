import { FC } from 'react'

interface IDishComponent {
    text: string,
    title: string,
}

const Dish:FC<IDishComponent> = ({ text, title }) => {

    return text ? (
        <div className='w-full flex justify-between text-lg mt-[0.5%] mb-[0.5%]'>
            <p className='w-[25%] font-bold bg-green-400 flex justify-center items-center p-[1%] rounded-l-sm'>
                {title}
            </p>
 
            <p className='w-[75%] bg-red-300 flex justify-center items-center p-[1%] rounded-r-sm'>
                {text}
            </p>
        </div>
    ) : <></>
}

export default Dish
