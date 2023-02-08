import React, {useState} from 'react'
import './Form.css'

export const Form = () => {

    return (
        <div className='fullscreen' style={{color: "black", fontSize: "20px"}}>
            <fieldset>
                <legend style={{textAlign: "center"}}>
                    Давайте познакомимся?
                </legend>
                <form>
                    <p>
                        <label className='fix_text'>ФИО: </label>
                        <input type='name' name="name" id="name" required/>
                    </p>
                    <p>
                        <label className='fix_text'>Телефон: </label>
                        <input type='phone' name="phone" id="phone" />
                    </p>
                    <p>
                        <label className='fix_text'>E-mail: </label>
                        <input type='email' name="email" id="email" required/>
                    </p>
                    <p>
                        <label className='fix_text'>Дата рождения: </label>
                        <input type='date' name="date" id="date" />
                    </p>
                    <p>
                        <label className='fix_text'>Образование: </label>
                        <br/><label><input type='radio' name="radio" id="radio"/> Основное общее</label>
                        <br/><label><input type='radio' name="radio" id="radio" /> Среднее общее</label>
                        <br/><label><input type='radio' name="radio" id="radio" /> Среднее профессионально</label>
                        <br/><label><input type='radio' name="radio" id="radio" /> Бакалавриат</label>
                        <br/><label><input type='radio' name="radio" id="radio" /> Специалитет</label>
                        <br/><label><input type='radio' name="radio" id="radio" /> Магистратура</label>
                    </p>
                    <p>
                        <label className='fix_text'>Сообщение: </label><br/>
                        <textarea type='message' name="message" id="message" style={{width: "98%", height: "50px"}} />
                    </p>
                    <p>
                        <button type="submit" style={{width:"100%", background:"#e8e8e8"}}>Отправить</button>
                    </p>
                </form>
            </fieldset>
        </div>
    )
}