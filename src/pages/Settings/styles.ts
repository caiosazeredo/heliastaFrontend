import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    flex: 1;
    max-height: 100vh;
    overflow-y: auto;
    
    @media (max-width: 1000px) {
        overflow-y: visible;
    }
`

export const HeaderDiv = styled.div`
    border-bottom: 2px solid #E5E7EB;
    padding: 15px 30px;
    
    align-items: center;

    justify-content: space-between;

    display: flex;

    h1{
        font-weight: 100;
        font-size: 18px;
    }

    .buttonStyle{
        //padding: 10px;
        font-size: 14px;
        text-transform: capitalize;
    }
`

export const HeaderButtonsDiv = styled.div`
    display: flex;
    gap: 10px;
`

export const Content = styled.div`
    padding: 0px 30px;
`

export const SectionDiv = styled.div`
    padding: 20px 0px;
`

export const TitleSectionDiv = styled.div`

    h1{
        font-size: 16px;
        font-weight: 100;
    }
    h2{
        font-size: 14px;
        font-weight: 100;
        color: #868D9B;
    }
`

export const ContentSectionDiv = styled.div`

`

export const TitleSection = styled.h1`
    font-size: 16px;
    font-weight: bold;
`

export const SubTitleSection = styled.h1`
    margin-top: 2px;
    font-size: 14px;
    font-weight: 100;
    color: #868D9B;
`

export const ItemContentSectionDiv = styled.div`
    display: flex;
    padding-block: 15px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const TitleItemContentSectionDiv = styled.div`
    width: 40%;
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const LabelItemContentSectionDiv = styled.div`
    flex: 1;

    @media (max-width: 1000px) {
        margin-top: 5px;
    }
`;

export const TitleItem = styled.h1`
    font-size: 14px;
    font-weight: 100;
    color: #111827;
`;

export const LabelItem = styled.span`
    font-size: 14px;
    font-weight: 100;
    color: #374151;
`;
