import { Container, FormDiv, ImgDiv, ImgsPatrocinioDiv, LeftSlide, PatrocinioDiv, RightSlide, TitleDiv, TitlePatrocinioDiv } from "./styles";

import logoImage from "../../assets/logo.png";
import imgLogin from "../../assets/imgLogin.svg";
import imgPesc from "../../assets/imgPesc.svg";
import imgCapgov from "../../assets/imgCapgov.svg";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";






export const Login = () => {
    const navigate = useNavigate();


    const handleLogin = () => {
        navigate('/')
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
                    />
                    <TextField
                        hiddenLabel
                        placeholder="Senha"
                        id="filled-hidden-label-normal"
                        variant="filled"
                        className="inputStyle"
                        type="password"

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