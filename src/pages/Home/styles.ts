import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    overflow-y: auto;
    min-height: 100vh;
    max-height: 100vh;

    @media (max-width: 1000px) {
        overflow-y: visible;
    }
`