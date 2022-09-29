import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'
import React from 'react'
import { db } from '../../Firebase/firebaseConfig';


const Form = ({cart, total, clearCart, handleId}) => {
    
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer : {fullname, phone, email},
            items : {cart},
            total : {total},
            date: serverTimestamp()
        };
        const orderCollection = collection(db, 'Orders');

        addDoc(orderCollection, order)
        .then((res) => {
            handleId (res.id)
            clearCart();
        })
    }

    const handleChangeNombre = (e) => {
        setFullname(e.target.value);
    };

    const handleChangeApellido = (e) => {
        setPhone(e.target.value);
    };

    const handleChangEmail = (e) => {
        setEmail(e.target.value)
    }

return (
        <div style={{ marginTop: '20px' }}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Full name'
                    name='name'
                    value={fullname}
                    onChange={handleChangeNombre}
                />
                <input
                    type='numbers'
                    placeholder='Phone'
                    name='telefono'
                    value={phone}
                    onChange={handleChangeApellido}
                />
                <input
                    type= 'text'
                    placeholder= 'Email'
                    name= 'email'
                    value= {email}
                    onChange= {handleChangEmail}
                />
                <button onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    );
};

export default Form;