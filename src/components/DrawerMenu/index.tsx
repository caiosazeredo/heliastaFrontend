import { BottomDiv, Container, MidleDiv, TopDiv } from "./styles"







export const DrawerMenu = () => {
    return(
        <Container>

            <TopDiv>
                <h1>top</h1>
            </TopDiv>

            <MidleDiv>
                <h1>midle</h1>
            </MidleDiv>

            <BottomDiv>
                <h1>bottom</h1>
            </BottomDiv>
        </Container>
    )
}