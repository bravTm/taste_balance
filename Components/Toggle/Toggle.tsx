import { Dispatch, FC, SetStateAction } from 'react'
import cn from 'clsx'

interface IToggle {
    title: string
    text: string
    setState: Dispatch<SetStateAction<"Ребенок" | "Взрослый" | "Пожилой">> | Dispatch<SetStateAction<"1 тип(СД1)" | "2 тип(СД2)">> | Dispatch<SetStateAction<"Мужской" | "Женский">> | Dispatch<SetStateAction<"Беременна" | "Небеременна">>
    array: string[]
}

const Toggle:FC<IToggle> = ({ title, setState, text, array }) => {

    // Там же выбор из трех, тогда чтобы было видно все пункты которые можно выбрать => сделать тоггл,
    // где будет загораться выбранный пункт, выбирать какой подсвечивать через useState, а стили можно
    // вспомнить через clsx

    return (
        <div className='text-black w-[80%] mt-[4%] select-none'>
            <p className='font-bold'>
                {title}
            </p>

            {title == "Возрастная группа" ? (
                <div className='flex justify-between w-full'>
                    {array.map((el, idx) => (
                        <div key={idx} className={cn({
                            "bg-[#BDB67D] cursor-pointer p-[3%] w-[33%] flex justify-center items-center rounded-sm": text == el,
                            "cursor-pointer p-[3%] border-[1px] bg-[#EEE8BF] w-[33%] flex justify-center items-center transition-all hover:bg-[#c2cccc] rounded-sm": !(text == el)
                        })}
                            // eslint-disable-next-line
                            // @ts-ignore
                            onClick={() => setState(el)}
                        >
                            <p className='text-sm'>
                                {el}
                            </p>
                        </div>
                    ))}
                </div>
            ) :
            (
                <div className='flex justify-between w-full'>
                    {array.map((el, idx) => (
                        <div key={idx} className={cn({
                            "bg-[#BDB67D] cursor-pointer p-[3%] w-[49%] flex justify-center items-center rounded-sm": text == el,
                            "cursor-pointer p-[3%] border-[1px] bg-[#EEE8BF] w-[49%] flex justify-center items-center transition-all hover:bg-[#c2cccc] rounded-sm": !(text == el)
                        })}
                            // eslint-disable-next-line
                            // @ts-ignore
                            onClick={() => setState(el)}
                        >
                            <p className='text-sm'>
                                {el}
                            </p>
                        </div>
                    ))}
                </div>
            )
            }

        </div>
    )
}

export default Toggle
