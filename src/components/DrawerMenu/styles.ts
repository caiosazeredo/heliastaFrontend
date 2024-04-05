import styled from 'styled-components';


export const Container = styled.div`
    display: flex;

    border-bottom: 2px solid #E5E7EB;
    //box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    padding: 10px 0px;

    .drawerStyle{
        background-color: red;
        width: 700px;
    }

    @media (min-width: 1000px) {
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


export const BottomDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 25px;

    gap: 20px;

    h1{
        font-size: 14px;
        color: #353F4E;
    }

    .iconLogoutStyle{
        cursor: pointer;

        color: #9CA3AF;
    }
`