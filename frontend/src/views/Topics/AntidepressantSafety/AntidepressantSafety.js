import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import Data from "../../searchBar/Data.json";

import "./AntidepressantSafety.css";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color:theme.palette.common.white,
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'underline',
    
  
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function AntidepressantSafety() {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:8887/api/antidepressantsafety')
        .then(response => {
          setData(response.data)
          console.log(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        });
        
  }, []);

  
  
  if(data.length > 0 )
  {
  return (
    <>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
    <div id="antidepressantSafety">
    <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" id="antidepressantSafetyHeader">Antidepressants Safety Concerns</Typography>
      </Box>
          <TableContainer component={Paper} >
                  <Table aria-label="customized table" id="antidepressantSafetyTable" >
                    
                    <TableBody>
                      {data.map((dataObj, index) => (
                        <StyledTableRow key={index} >
                          <StyledTableCell >{dataObj[`Description`]}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer><br></br>
                <div className='antidepressantSafety-notes'>
                  <p className='antidepressantSafety-notes-key'>
                    <b>Key notes: </b> ANTID_SC means Antidepressants safety concerns
                  </p>
                </div>
            </div>
    <Footer />
    </>
  );
}
};