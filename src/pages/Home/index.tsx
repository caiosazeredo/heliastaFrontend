import { useEffect } from "react"

import { useTabMenuContext } from '../../helpers/TabMenuContext';
import { Container } from "./styles";






export const Home = () => {
    const { handleChangeTabMenuContext } = useTabMenuContext();

    
    //garantir que o tab acompanha o usuário que colocar a rota na url e não navegar por click
    useEffect(()=>{
        handleChangeTabMenuContext(null, 0);
    },[])

    return(
        <Container>
            <h1>HOME</h1>
        </Container>
    )
}