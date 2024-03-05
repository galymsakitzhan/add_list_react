import { Link, useNavigate} from 'react-router-dom';
import './add.css'
import { useState } from 'react';

export default function Add(){

    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [phone,setPhone] = useState('');


    const navigate = useNavigate();


    const handleNameChange = (event) =>{
        setName(event.target.value);
    }

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    }

    const handlePhoneChange = (event) =>{
        // handleNameChange является обработчиком события, который будет вызываться при изменении значения в поле ввода телефона (input).
        setPhone(event.target.value);
        // Затем setPhone используется для обновления значения переменной состояния phone значением, введенным пользователем.
    }
 

    const onSave = () =>{
        if(!name || !surname || !phone) return;
        let list = sessionStorage.getItem("list");
        if(!list){
            list = [];
        }else{
            list = JSON.parse(list);
        }
            list.push({
                name,
                surname,
                phone
            })
            sessionStorage.setItem("list", JSON.stringify(list))
            navigate('/');
    }



    const callback = () =>{
        return(
            <nav>
                <Link to="/" className='link-add'>Home page</Link>
                <Link to="/list" className='link-add'>List page</Link>
            </nav>
        );
    }

    return(
        <div className="form">
            <div className="container">
            <h1 className='h1-add'>Add Page</h1>
            <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="First name"/>
            <input value={surname} onChange={handleSurnameChange} type="text" name="surname" placeholder="Last surname"/>
            <input value={phone} onChange={handlePhoneChange} type="text" name="phonenumber" placeholder="Phone number"/>
            {/* вызывается handlePhoneChange, и значение переменной состояния phone обновляется этим новым значением. */}
            <button onClick={onSave}>Save</button>
            {callback()}
            </div>
        </div>
        )
}
