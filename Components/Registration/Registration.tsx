"use client"

import { FC, useState } from 'react'
import Input from '../Input/Input';
import Toggle from '../Toggle/Toggle';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';

const Registration:FC = () => {
    const { push } = useRouter()

    const [name, setName] = useState('');
    const [age, setAge] = useState<"Ребенок" | "Взрослый" | "Пожилой">('Ребенок');
    const [gender, setGender] = useState<"Мужской" | "Женский">('Мужской');
    const [diabetType, setDiabetType] = useState<"1 тип(СД1)" | "2 тип(СД2)">('1 тип(СД1)');
    const [isPregnant, setIsPregnant] = useState<"Беременна" | "Небеременна">('Небеременна');

    const handleChange = (event: Event) => {
        if (event.target instanceof HTMLInputElement) {
            setName(event.target.value);
        }
    };

    const saveToLocalStorage = () => {
        localStorage.setItem("name", name)
        localStorage.setItem("age", age)
        localStorage.setItem("gender", gender)
        localStorage.setItem("diabetType", diabetType)
        localStorage.setItem("isPregnant", isPregnant)
        push('/')
    }

    return (
        <div className='text-black h-screen w-screen flex items-center justify-center'>
            <div className='xl:h-[88%] w-[90%] h-[60%] bg-[#dce0e0] rounded-2xl md:w-[40%] md:h-[60%]'>
                <p className='text-black text-3xl font-bold text-center mt-[5%] mb-[5%]'>
                    Создайте аккаунт
                </p>

                <div className='flex items-center h-full flex-col'>
                    <Input text={name} handleChange={handleChange}/>
                    <Toggle title='Тип диабета' setState={setDiabetType} text={diabetType} array={["1 тип(СД1)","2 тип(СД2)"]} />
                    <Toggle title='Возрастная группа' setState={setAge} text={age} array={["Ребенок", "Взрослый", "Пожилой"]} />
                    <Toggle title='Пол' setState={setGender} text={gender} array={["Мужской", "Женский"]} />
                    
                    {gender == "Женский" ? (
                        <Toggle title='Беременность' setState={setIsPregnant} text={isPregnant} array={["Беременна", "Небеременна"]} />
                    ) : <></>}

                    <Button title='Войти' onClick={saveToLocalStorage}/>
                </div>

            </div>
        </div>
    )
}

export default Registration