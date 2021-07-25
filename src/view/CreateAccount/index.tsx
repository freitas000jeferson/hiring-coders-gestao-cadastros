import React, {useState, useEffect} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IAddress from '../../model/IAddress';
import IUser from '../../model/IUser';
import { useHistory } from 'react-router-dom';

import { CreatePage,AccountForm, MainForm} from './style';

const CreateAccount: React.FC = () => {
  const history = useHistory();

const [email, setEmail]= useState<string>("");
const [password, setPassword]= useState<string>("");
const [fullName, setFullName]= useState<string>("");
const [cpfOrCnpj, setCpfOrCnpj]= useState<string>("");
const [birthdate, setBirthdate]= useState<string>("");
const [phone, setPhone]= useState<string>("");
const [recipientName, setRecipientName]= useState<string>("");
const [typeAddress, setTypeAddress]= useState<string>("");
const [cep, setCep]= useState<string>("");
const [numberAddress, setNumberAddress]= useState<string>("");
const [address, setAddress]= useState<string>("");
const [referencePoint, setReferencePoint]= useState<string>("");
const [complement, setComplement]= useState<string>("");
const [neighborhood, setNeighborhood]= useState<string>("");
    const [city, setCity]= useState<string>("");
const [state, setState]= useState<string>("");
const [country, setCountry]= useState<string>("");
    useEffect(()=>{
        const metaData:IUser = JSON.parse(localStorage.getItem('UserAccount') || '{}');
        setEmail(metaData.email||"");
        setPassword(metaData.password||"");
        setFullName(metaData.fullName||"");
        setCpfOrCnpj(metaData.cpfOrCnpj||"");
        setBirthdate(metaData.birthdate||"");
        setPhone(metaData.phone||"");
        setRecipientName(metaData.address.recipientName||"");
        setTypeAddress(metaData.address.typeAddress||"");
        setCep(metaData.address.cep||"");
        setNumberAddress(metaData.address.numberAddress||"");
        setAddress(metaData.address.address||"");
        setReferencePoint(metaData.address.referencePoint||"");
        setComplement(metaData.address.complement||"");
        setNeighborhood(metaData.address.neighborhood||"");
        setCity(metaData.address.city||"");
        setState(metaData.address.state||"");
        setCountry(metaData.address.country||"");
    },[])
    //  const [user, setUser]= useState<IUser>({
    //     id: "",
    //     email:"",
    //     password:"",
    //     fullName:"",
    //     cpfOrCnpj:"",
    //     birthdate:"",
    //     phone:"",
    //     address: {
    //         recipientName:"",
    //         typeAddress: "",
    //         cep: "",
    //         numberAddress: "",
    //         address: "",
    //         referencePoint:"",
    //         complement:"",
    //         neighborhood:"",
    //         city: "",
    //         state: "",
    //         country: "",
    //      },
    //  });
       
      const saveStorage=()=>{
        const addressUser:IAddress ={ recipientName,
            address,
            typeAddress,
            cep,
            numberAddress,
            referencePoint,
            complement,
            neighborhood,
            city,
            state,
            country,
        };
        const data:IUser={
            id:"001",
            email,
            password,
            fullName,
            cpfOrCnpj,
            birthdate,
            phone,
            address: addressUser,
            
        };
        
        localStorage.setItem(`UserAccount`, JSON.stringify(data));
      }

  return <div>
    <Header/>
    <MainForm>
        <CreatePage>
            <div className="container-save">
                <button onClick={(e:any)=>{
                    e.preventDefault(); 
                    saveStorage();
                    history.push('/my-car');
                }} className="save-user"> 
                    SALVAR
                </button>
            </div>
        </CreatePage>
        <CreatePage>
            <AccountForm>
                <h2>Meus Dados Pessoais</h2>
                <fieldset>
                    <label>Nome completo:</label>
                    <input  type="text" placeholder="Nome completo"  value={fullName}
                    onChange={e => setFullName(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Data de nascimento:</label>
                    <input  type="text" placeholder="Data de nascimento" value={birthdate}
                    onChange={e => setBirthdate(e.target.value)}/>
                </fieldset> 
                <fieldset>
                    <label>CPF/CNPJ:</label>
                    <input  type="text" placeholder="cpf ou cnpj" value={cpfOrCnpj}
                    onChange={e => setCpfOrCnpj(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Telefone:</label>
                    <input  type="text" placeholder="Telefone" value={phone}
                    onChange={e => setPhone(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Email:</label>
                    <input  type="text" placeholder="Email" value={email}
                    onChange={e => setEmail(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Senha:</label>
                    <input  type="text" placeholder="Senha" value={password}
                    onChange={e => setPassword(e.target.value)}/>
                </fieldset>
                
            </AccountForm>
            <AccountForm>
                <h2>Meu Endereço</h2> 
                <fieldset>
                    <label>Nome do destinatário:</label>
                    <input  type="text" placeholder="Nome do destinatário" value={recipientName}
                    onChange={e => setRecipientName(e.target.value)}/>
                </fieldset>
                <div className="container-group">
                    <fieldset>
                        <label>Tipo do endereço:</label>
                        <input  type="text" placeholder="Tipo do endereço" value={typeAddress}
                        onChange={e => setTypeAddress(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                        <label>Cep:</label>
                        <input  type="text" placeholder="Cep" value={cep}
                        onChange={e => setCep(e.target.value)}/>
                    </fieldset>
                </div>
                <div className="container-group">
                    <fieldset>
                        <label>Endereço:</label>
                        <input  type="text" placeholder="Endereço" value={address}
                        onChange={e => setAddress(e.target.value)}/>
                    </fieldset>
                    
                    <fieldset>
                        <label>Número:</label>
                        <input  type="text" placeholder="Número" value={numberAddress}
                        onChange={e => setNumberAddress(e.target.value)}/>
                    </fieldset>
                </div>
                <fieldset>
                    <label>Ponto de referência:</label>
                    <input  type="text" placeholder="Ponto de referência" value={referencePoint}
                    onChange={e => setReferencePoint(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Complemento:</label>
                    <input  type="text" placeholder="Complemento" value={complement}
                    onChange={e => setComplement(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Bairro:</label>
                    <input  type="text" placeholder="Bairro" value={neighborhood}
                    onChange={e => setNeighborhood(e.target.value)}/>
                </fieldset>
                
                <fieldset>
                    <label>Cidade:</label>
                    <input  type="text" placeholder="Cidade" value={city}
                    onChange={e => setCity(e.target.value)}/>
                </fieldset>
                <div className="container-group">
                    <fieldset>
                        <label>Estado:</label>
                        <input type="text" placeholder="Estado" value={state}
                        onChange={e => setState(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                        <label>Pais:</label>
                        <input type="text" placeholder="Pais" value={country}
                        onChange={e => setCountry(e.target.value)}/>
                    </fieldset>
                </div>
            </AccountForm>
        </CreatePage>
    </MainForm>
    <Footer/>

  </div>;
}

export default CreateAccount;