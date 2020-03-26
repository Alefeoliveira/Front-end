import React, {useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

export default function Register(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();


   async function handleRegister(e){
        
    e.preventDefault();

        const data = {
            nome,
            email,
            whatsapp,
            city,
            uf
        };

       const response = await api.post('ongs', data);
        try {
            alert(`Seu id de acesso: ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert('Erro ao cadastrar ONG');
        }
       
    }



    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                        Não tenho um cadastro
                    </Link> 
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    value={nome} 
                    onChange={e => setNome(e.target.value)}
                    placeholder="Nome da ONG"></input>
                   
                    <input type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder="E-mail"></input>
                    
                    <input 
                    value={whatsapp} 
                    onChange={e => setWhatsapp(e.target.value)}
                    placeholder="WhatsApp"></input>

                    <div className="input-group">
                        <input
                         value={city} 
                         onChange={e => setCity(e.target.value)}
                         placeholder="Cidade"/>
                        
                        <input 
                         value={uf} 
                         onChange={e => setUF(e.target.value)}
                         placeholder="UF" style={{width: 80}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}