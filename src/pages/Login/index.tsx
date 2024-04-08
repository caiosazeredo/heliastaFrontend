import { Container, FormDiv, ImgDiv, ImgsPatrocinioDiv, LeftSlide, PatrocinioDiv, RightSlide, TitleDiv, TitlePatrocinioDiv } from "./styles";

import logoImage from "../../assets/logo.png";
import imgLogin from "../../assets/imgLogin.svg";
import imgPesc from "../../assets/imgPesc.svg";
import imgCapgov from "../../assets/imgCapgov.svg";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../helpers/AuthContext";






export const Login = () => {
    const navigate = useNavigate();

    const { user, signin } = useContext(AuthContext)


    const [email, setEmail] = useState('xexeo@cos.ufrj.br')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[user])


    const handleLogin = async() => {
        if(email && password){
            const json = await signin(email, password)
            if(json.error){
                //Swal.fire(json.error, "", "error");
                alert(json.error)
            }else{
                navigate('/')
            }
        }else{
            alert('Digite os campos solicitados.')
        }
    }

    return (
        <Container>
            <LeftSlide>

                <TitleDiv>
                    <img src={logoImage} alt="Logo" />
                    <h1>Heliasta</h1>
                </TitleDiv>

                <FormDiv>
                    <TextField
                        hiddenLabel
                        placeholder="Email"
                        id="filled-hidden-label-normal"
                        variant="filled"
                        className="inputStyle"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        hiddenLabel
                        placeholder="Senha"
                        id="filled-hidden-label-normal"
                        variant="filled"
                        className="inputStyle"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button variant="contained" className="buttonStyle" onClick={handleLogin}>Login</Button>

                </FormDiv>

            </LeftSlide>


            <RightSlide>
                <ImgDiv>
                    <img src={imgLogin} alt="Logo" />
                </ImgDiv>
                <PatrocinioDiv>
                    <TitlePatrocinioDiv>
                        <h1>Desenvolvimento:</h1>
                    </TitlePatrocinioDiv>
                    <ImgsPatrocinioDiv>
                        <img src={imgPesc} alt="Logo" />
                        <img src={imgCapgov} alt="Logo" />
                    </ImgsPatrocinioDiv>
                </PatrocinioDiv>
            </RightSlide>
        </Container>
    )
}