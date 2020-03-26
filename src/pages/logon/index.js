import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api'

import './styles.css';
import '../../global.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg';

export default function Logon(){

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try {
           const resposta = await api.post('sessions', { id });

           localStorage.setItem('ongId', id);
           localStorage.setItem('ongName', resposta.data.nome);

           history.push('/profile');
        } catch (error) {
           alert('falha no login tente novamente.') 
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg}/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    
                    <input
                    value={id}
                    onChange={ e => setId(e.target.value)}
                    placeholder="Sua ID"></input>

                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/registro">
                        <FiLogIn size={16} color="#e02041"></FiLogIn>
                        Não tenho um cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg}/>
        </div>
    );

}