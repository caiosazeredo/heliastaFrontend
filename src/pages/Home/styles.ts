import { InputBase, TableCell, TableRow, alpha, styled as styled2, tableCellClasses } from '@mui/material';
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
    padding: 15px 35px;
    
    align-items: center;

    justify-content: space-between;

    display: flex;

    h1{
        font-weight: 100;
        font-size: 18px;
    }

    min-height: 70px;
`

export const StatisticsAndFilterDiv = styled.div`
    padding: 25px 35px;
    border-bottom: 2px solid #E5E7EB;
`

export const StatisticsDiv = styled.div`
    h1{
        font-weight: 100;
        font-size: 14px;
    }
`;

export const StatisticsInputsDiv = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 25px;


    .inputStyle{
        width: 250px;
        font-size: 18px;
    }

    @media (max-width: 600px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const FilterDiv = styled.div`
`;

export const ItemStatisticsInputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;









export const BootstrapInput = styled2(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      cursor: 'not-allowed',
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));





export  const StyledTableCell = styled2(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
export  const StyledTableRow = styled2(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));