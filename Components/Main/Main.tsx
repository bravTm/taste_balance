"use client"

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react'
import Registration from '../Registration/Registration';
import Menu from '../Menu/Menu';
import { caloriesKidsSD1, caloriesKidsSD2, caloriesPregnant, caloriesSD1, caloriesSD2, menuKidsSD1, menuKidsSD2, menuPregnant, menuSD1, menuSD2 } from './main.data';
import Dish from '../Dish/Dish';

const Main:FC = () => {
    const { push } = useRouter()

    const [name, setName] = useState('');
    const [age, setAge] = useState<"Ребенок" | "Взрослый" | "Пожилой">('Ребенок');
    const [gender, setGender] = useState<"Мужской" | "Женский">('Мужской');
    const [diabetType, setDiabetType] = useState<"1 тип(СД1)" | "2 тип(СД2)">('1 тип(СД1)');
    const [isPregnant, setIsPregnant] = useState<"Беременна" | "Небеременна">('Небеременна');
    const [day, setDay] = useState<"Пн" | 'Вт' | "Ср" | "Чт" | "Пт" | "Сб" | "Вс">("Пн")


    const load = () => {
        if(localStorage.getItem("name") != null && localStorage.getItem("age") != null) {
            // eslint-disable-next-line
            // @ts-ignore
            setName(localStorage.getItem("name"))
            // eslint-disable-next-line
            // @ts-ignore
            setAge(localStorage.getItem("age"))
            // eslint-disable-next-line
            // @ts-ignore
            setGender(localStorage.getItem("gender"))
            // eslint-disable-next-line
            // @ts-ignore
            setDiabetType(localStorage.getItem("diabetType"))
            // eslint-disable-next-line
            // @ts-ignore
            setIsPregnant(localStorage.getItem("isPregnant"))
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        load()
    }, [])

    useEffect(() => {
        if(!name && localStorage.getItem("name") == null) {
            push("/registration")
        }
    }, [name, push])
    

    return  (
        <>
            <div className='top-0 w-full h-[2%] bg-yellow-300 text-black flex justify-center items-center lg:mb-[1.5%] mb-[4%] text-center px-[1%]'>
                Данное меню не является лекарственным средством и не заменяет индивидуальный план питания, перед использованием рекомендуется консультация лечащего врача.
            </div>

            <Menu day={day} setDay={setDay}/>

            {/* <div className='flex flex-col justify-center items-center'> */}
                
                <div className='text-black font-bold flex justify-center items-center lg:mt-[2%] lg:mb-[2%] mt-[4.5%] mb-[4.5%]'>
                    {isPregnant == 'Беременна' ? caloriesPregnant[day] : 
                    age == 'Ребенок' && diabetType == '1 тип(СД1)' ? caloriesKidsSD1[day] :
                    age == 'Ребенок' && diabetType == '2 тип(СД2)' ? caloriesKidsSD2[day] :
                    diabetType == '2 тип(СД2)' ? caloriesSD2[day] : caloriesSD1[day]  }
                </div>

                
                {isPregnant == 'Беременна' ? (
                    <div className='text-black w-full flex justify-center items-center flex-col'>
                        <Dish title={"Завтрак"} text={menuPregnant[day].breakfast}/>
                        <Dish title={"Обед"} text={menuPregnant[day].lunch}/>
                        <Dish title={"Полдник 1"} text={menuPregnant[day].underpinning1}/>
                        <Dish title={"Полдник 2"} text={menuPregnant[day].underpinning2}/>
                        <Dish title={"Ужин 1"} text={menuPregnant[day].dinner}/>
                        <Dish title={"Ужин 2"} text={menuPregnant[day].dinner2}/>
                    </div>
                ) : 

                age == 'Ребенок' && diabetType == '1 тип(СД1)' ? (
                    <div className='text-black'>
                        <Dish title={"Завтрак"} text={menuKidsSD1[day].breakfast}/>
                        <Dish title={"Обед"} text={menuKidsSD1[day].lunch}/>
                        <Dish title={"Полдник 1"} text={menuKidsSD1[day].underpinning1}/>
                        <Dish title={"Полдник 2"} text={menuKidsSD1[day].underpinning2}/>
                        <Dish title={"Ужин 1"} text={menuKidsSD1[day].dinner}/>
                        <Dish title={"Ужин 2"} text={menuKidsSD1[day].dinner2}/>
                    </div>
                ) :

                age == 'Ребенок' && diabetType == '2 тип(СД2)' ? (
                    <div className='text-black'>
                        <Dish title={"Завтрак"} text={menuKidsSD2[day].breakfast}/>
                        <Dish title={"Обед"} text={menuKidsSD2[day].lunch}/>
                        <Dish title={"Полдник 1"} text={menuKidsSD2[day].underpinning1}/>
                        <Dish title={"Полдник 2"} text={menuKidsSD2[day].underpinning2}/>
                        <Dish title={"Ужин 1"} text={menuKidsSD2[day].dinner}/>
                        <Dish title={"Ужин 2"} text={menuKidsSD2[day].dinner2}/>
                    </div>
                ) :

                diabetType == '2 тип(СД2)' ? (
                    <div className='text-black'>
                        <Dish title={"Завтрак"} text={menuSD2[day].breakfast}/>
                        <Dish title={"Обед"} text={menuSD2[day].lunch}/>
                        <Dish title={"Полдник 1"} text={menuSD2[day].underpinning1}/>
                        <Dish title={"Полдник 2"} text={menuSD2[day].underpinning2}/>
                        <Dish title={"Ужин 1"} text={menuSD2[day].dinner}/>
                        <Dish title={"Ужин 2"} text={menuSD2[day].dinner2}/>
                    </div>
                ) : 

                (
                    <div className='text-black'>
                        <Dish title={"Завтрак"} text={menuSD1[day].breakfast}/>
                        <Dish title={"Обед"} text={menuSD1[day].lunch}/>
                        <Dish title={"Полдник 1"} text={menuSD1[day].underpinning1}/>
                        <Dish title={"Полдник 2"} text={menuSD1[day].underpinning2}/>
                        <Dish title={"Ужин 1"} text={menuSD1[day].dinner}/>
                        <Dish title={"Ужин 2"} text={menuSD1[day].dinner2}/>
                    </div>
                )  }
                

            {/* </div> */}
        </>
    )
}

export default Main
