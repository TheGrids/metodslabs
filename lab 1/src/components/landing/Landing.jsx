import React, {useState} from 'react'
import './Landing.css'

export const Landing = () => {

    return (
        <div className='fullscreen' style={{background : "linear-gradient(150deg, #121212,#4e4e4e)", color: "white", justifyContent: "start"}}>
            <div className='box' style={{margin: "60px", textAlign: "center", fontSize: "60px"}}><b>Добро пожаловать на супер крутой сайт</b></div>
            <div className='box' style={{flexDirection: "row"}}>
                <div className='box'>
                    <b>
                        ФИО: Золотарь Александр Евгеньевич <br/>
                        Группа: ВИАС21 <br/>
                        Образование: среднее <br/>
                        Опыт работы: отсутствует <br/>
                        Интересы: Программирование, фото и съёмка <br/>
                        <fieldset>
                            <legend>Контактная информация:</legend>
                            Почта: zolotar333@gmail.com <br/>
                            Телефон: +79999999999
                        </fieldset>
                    </b>
                </div>
                <div className='box'>
                    <img src="https://klike.net/uploads/posts/2020-08/1597994310_1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}