import React, {useState} from 'react'
import './Landing.css'

export const Landing = () => {

    return (
        <div className='fullscreen'>
            <div className='box'>
                <b>
                    ФИО: Золотарь Александр Евгеньевич <br/>
                    Группа: ВИАС21 <br/>
                    Образование: среднее <br/>
                    Опыт работы: отсутствует <br/>
                    Интересы: Программирование, фото и съёмка <br/>
                    Почта: zolotar333@gmail.com <br/>
                    Телефон: +79999999999
                </b>
            </div>
            <div className='box'>
                <img src="https://klike.net/uploads/posts/2020-08/1597994310_1.jpg" alt="" />
            </div>
        </div>
    )
}