import { FC } from 'react'

interface IDishComponent {
    text: string,
    title: string,
}

const Dish:FC<IDishComponent> = ({ text, title }) => {

    return text ? (
        <div className='w-full flex justify-between text-lg mt-[0.5%] mb-[0.5%] '>
            <p className='w-[25%] font-bold bg-[#BDB67D] flex justify-center items-center p-[1%] rounded-l-sm hover:bg-[#d1ca8c] transition-all'>
                {title}
            </p>
 
            <p className='w-[75%] bg-[#EEE8BF] border-[1px] flex justify-center items-center p-[1%] rounded-r-sm hover:bg-[#d9d3ad] transition-all'>
                {text}
            </p>
        </div>
    ) : <></>
}

export default Dish
