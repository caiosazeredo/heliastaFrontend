import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
`
export const LeftSlide = styled.div`
    background-color: #F3F4F6;
    display: flex;
    flex-direction: column;

    gap: 50px;

    justify-content: center;
    align-items: center;

    width: 35%;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (max-width: 1300px) {
        width: 100%;
    }
`
export const RightSlide = styled.div`
    flex: 1;
`

export const TitleDiv = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 20px;

    h1{
        color: #1976D2;
        font-size: 40px;
    }
    img{
        width: 48px;
        height: 48px;
    }
`

export const FormDiv = styled.form`
    display: flex;
    flex-direction: column;

    .inputStyle{
        width: 350px;
        padding: 10px;
    }

    .buttonStyle{
        align-self: center;

        max-width: 330px;
        width: 330px;
        padding: 15px;

        font-size: 14px;

        margin-top: 20px;
    }
`

export const ImgDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    img{
        width: 70%;
    }

    @media (max-width: 1300px) {
        display: none; 
    }
`
export const PatrocinioDiv = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    padding: 20px;
`
export const TitlePatrocinioDiv = styled.div`
    h1{
        font-size: 18px;
        font-weight: 100;
        margin-bottom: 10px;
    }
`
export const ImgsPatrocinioDiv = styled.div`
    display: flex;

    img{
        width: 120px;
        height: 120px;
    }
`