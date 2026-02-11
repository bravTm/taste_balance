import { Dispatch, FC, SetStateAction } from 'react'
import { menu } from './menu.data'
import cn from 'clsx'

interface IMenu {
    setDay: Dispatch<SetStateAction<"Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс">>
    day: "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс"
}


const Menu:FC<IMenu> = ({ day, setDay }) => {
    return (
        <div className='flex justify-between items-center lg:ml-[5%] lg:mr-[5%] ml-[2%] mr-[2%] text-lg'>
            {menu.map((el, idx) => (
                <div 
                    key={idx} 
                    // eslint-disable-next-line
                    // @ts-ignore
                    onClick={() => setDay(el)}
                    className={cn({
                        'lg:w-[14%] w-[13%] text-white p-[1%] bg-[#79793F] flex justify-center items-center cursor-pointer rounded-sm hover:bg-[#78864B] transition-all': day == el,
                        'lg:w-[14%] w-[13%] text-black p-[1%] bg-[#EEE8BF] flex justify-center items-center cursor-pointer rounded-sm hover:bg-[#BDB67D] transition-all border-[1px]': !(day == el)
                        
                    })}>
                    {el}
                </div>
            ))}
        </div>
    )
}

export default Menu
