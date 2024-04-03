import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (max-width: 1300px) {
        display: none; 
    }
`


export const TopDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 25px;

    gap: 20px;

    img{
        width: 40px;
        height: 40px; 

        cursor: pointer;
    }

    h1{
        color: #1976D2;
        font-size: 36px;
        cursor: pointer;
    }
`

export const MidleDiv = styled.div`
    flex: 1;
`

export const ItemTab = styled.div`
    display: flex;
    //flex: 1;
    //background-color: red;
    align-items: center;
    justify-content: center;

    gap: 10px;

    .iconStyle{
        font-size: 22px;
    }

    h1{
        font-size: 10px;
        text-transform: capitalize;
    }

`

export const BottomDiv = styled.div`
 
    background-color: purple;
`