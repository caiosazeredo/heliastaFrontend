import { useEffect, useState } from "react"

import { useTabMenuContext } from '../../helpers/TabMenuContext';
import { BootstrapInput, Container, FilterDiv, HeaderDiv, ItemStatisticsInputsDiv, StatisticsAndFilterDiv, StatisticsDiv, StatisticsInputsDiv, StyledTableCell, StyledTableRow } from "./styles";







export const Home = () => {
    const { handleChangeTabMenuContext } = useTabMenuContext();

    

    //garantir que o tab acompanha o usuário que colocar a rota na url e não navegar por click
    useEffect(() => {
        handleChangeTabMenuContext(null, 0);
    }, [])

    return (
        <Container>
            <HeaderDiv>
                <h1>Processos</h1>
            </HeaderDiv>

            <StatisticsAndFilterDiv>

                <StatisticsDiv>
                    <h1>Estatísticas</h1>

                    <StatisticsInputsDiv>
                        <ItemStatisticsInputsDiv>
                            <h1>Total de Processos</h1>
                            <BootstrapInput /* defaultValue="react-bootstrap" */ value={302} id="bootstrap-input" disabled />
                        </ItemStatisticsInputsDiv>

                        <ItemStatisticsInputsDiv>
                            <h1>Total de Processos</h1>
                            <BootstrapInput /* defaultValue="react-bootstrap" */ value={1352} id="bootstrap-input" disabled />
                        </ItemStatisticsInputsDiv>
                    </StatisticsInputsDiv>


                </StatisticsDiv>
                <FilterDiv>

                </FilterDiv>
            </StatisticsAndFilterDiv>

            
        

        </Container >
    )
}