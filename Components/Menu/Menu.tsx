import { Dispatch, FC, SetStateAction } from 'react'
import { menu } from './menu.data'
import cn from 'clsx'

interface IMenu {
    setDay: Dispatch<SetStateAction<"Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс">>
    day: "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс"
}


const Menu:FC<IMenu> = ({ day, setDay }) => {
    return (
        <div className='flex justify-between items-center ml-[5%] mr-[5%] text-lg'>
            {menu.map((el, idx) => (
                <div 
                    key={idx} 
                    // eslint-disable-next-line
                    // @ts-ignore
                    onClick={() => setDay(el)}
                    className={cn({
                        'w-[14%] text-black p-[1%] bg-[#2bb55c] flex justify-center items-center cursor-pointer rounded-sm hover:bg-[#32c967] transition-all': day == el,
                        'w-[14%] text-black p-[1%] bg-[#51cfc8] flex justify-center items-center cursor-pointer rounded-sm hover:bg-[#59ded6] transition-all': !(day == el)
                        
                    })}>
                    {el}
                </div>
            ))}
        </div>
    )
}

export default Menu