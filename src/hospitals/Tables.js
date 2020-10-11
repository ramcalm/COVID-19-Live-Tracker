import React, { useState, useEffect } from 'react';
import numeral from "numeral";
import axios from 'axios';
import '../Table.css'
import {Container, TextField, TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'











const json = {
    "success": true,
    "data": {
      "contacts": {
        "primary": {
          "number": "+91-11-23978046",
          "number-tollfree": "1075",
          "email": "ncov2019@gov.in",
          "twitter": "https://twitter.com/MoHFW_INDIA",
          "facebook": "https://www.facebook.com/MoHFWIndia",
          "media": [
            "https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"
          ]
        },
        "regional": [
          {
            "loc": "Andhra Pradesh",
            "number": "+91-866-2410978"
          },
          {
            "loc": "Arunachal Pradesh",
            "number": "+91-9436055743"
          },
          {
            "loc": "Assam",
            "number": "+91-6913347770"
          },
          {
            "loc": "Bihar",
            "number": "104"
          },
          {
            "loc": "Chhattisgarh",
            "number": "104"
          },
          {
            "loc": "Goa",
            "number": "104"
          },
          {
            "loc": "Gujarat",
            "number": "104"
          },
          {
            "loc": "Haryana",
            "number": "+91-8558893911"
          },
          {
            "loc": "Himachal Pradesh",
            "number": "104"
          },
          {
            "loc": "Jharkhand",
            "number": "104"
          },
          {
            "loc": "Karnataka",
            "number": "104"
          },
          {
            "loc": "Kerala",
            "number": "+91-471-2552056"
          },
          {
            "loc": "Madhya Pradesh",
            "number": "+91-755-2527177"
          },
          {
            "loc": "Maharashtra",
            "number": "+91-20-26127394"
          },
          {
            "loc": "Manipur",
            "number": "+91-3852411668"
          },
          {
            "loc": "Meghalaya",
            "number": "108"
          },
          {
            "loc": "Mizoram",
            "number": "102"
          },
          {
            "loc": "Nagaland",
            "number": "+91-7005539653"
          },
          {
            "loc": "Odisha",
            "number": "+91-9439994859"
          },
          {
            "loc": "Punjab",
            "number": "104"
          },
          {
            "loc": "Rajasthan",
            "number": "+91-141-2225624"
          },
          {
            "loc": "Sikkim",
            "number": "104"
          },
          {
            "loc": "Tamil Nadu",
            "number": "+91-44-29510500"
          },
          {
            "loc": "Telengana",
            "number": "104"
          },
          {
            "loc": "Tripura",
            "number": "+91-381-2315879"
          },
          {
            "loc": "Uttarakhand",
            "number": "104"
          },
          {
            "loc": "Uttar Pradesh",
            "number": "18001805145"
          },
          {
            "loc": "West Bengal",
            "number": "1800313444222,+91-3323412600,"
          },
          {
            "loc": "Andaman and Nicobar Islands",
            "number": "+91-3192-232102"
          },
          {
            "loc": "Chandigarh",
            "number": "+91-9779558282"
          },
          {
            "loc": "Dadra and Nagar Haveli",
            "number": "104"
          },
          {
            "loc": "Daman & Diu",
            "number": "104"
          },
          {
            "loc": "Delhi",
            "number": "+91-11-22307145"
          },
          {
            "loc": "Jammu and Kashmir",
            "number": "+91-191-2520982,+91-194-2440283"
          },
          {
            "loc": "Ladakh",
            "number": "+91-1982-256462"
          },
          {
            "loc": "Lakshadweep",
            "number": "104"
          },
          {
            "loc": "Puducherry",
            "number": "104"
          }
        ]
      }
    },
    "lastRefreshed": "2020-03-22T12:43:00.000Z",
    "lastOriginUpdate": "2020-03-22T06:15:00.000Z"
  }

  

console.log("HI");
const sampleData = [
        {id: 0, State: 'Andhra Pradesh', Helpline: '+91-866-2410978'},
        {id: 1, State: 'Arunachal Pradesh', Helpline: '+91-9436055743'},
        {id: 2, State: 'Assam', Helpline: '+91-6913347770'},
        {id: 3, State: 'Bihar', Helpline: '104'},
        {id: 4, State: 'Chattisgarh', Helpline: '104'},
        {id: 5, State: 'Goa', Helpline: '104'},
        {id: 6, State: 'Gujarat', Helpline: '104'},
        {id: 7, State: 'Haryana', Helpline: '+91-8558893911'},
        {id: 8, State: 'Himachal Pradesh', Helpline: '104'},
        {id: 9, State: 'Jharkhand', Helpline: '104'},
        {id: 10, State: 'Karnataka', Helpline: '104'},
        {id: 11, State: 'Kerala', Helpline: '+91-471-2552056'},
        {id: 12, State: 'Madhya Pradesh', Helpline: '+91-471-25520'},
        {id: 13, State: 'Maharashtra', Helpline: '104'},
        {id: 14, State: 'Manipur', Helpline: '104'},
        {id: 15, State: 'Meghalaya', Helpline: '108'},
        {id: 16, State: 'Mizoram', Helpline: '102'},
        {id: 17, State: 'Nagaland', Helpline: '+91-7005539653'},
        {id: 18, State: 'Odisha', Helpline: '+91-9439994859'},
        {id: 19, State: 'Punjab', Helpline: '104'},
        {id: 20, State: 'Rajasthan', Helpline: '+91-141-2225624'},
        {id: 21, State: 'Sikkim', Helpline: '104'},
        {id: 22, State: 'Tamil Nadu', Helpline: '+91-44-29510500'},
        {id: 23, State: 'Telangana', Helpline: '104'},
        {id: 24, State: 'Tripura', Helpline: '+91-381-2315879'},
        {id: 25, State: 'Uttarakhand', Helpline: '104'},
        {id: 27, State: 'Uttar Pradesh', Helpline: '18001805145'},
        {id: 28, State: 'West Bengal', Helpline: '1800313444222,+91-3323412600'},
        {id: 29, State: 'Andaman and Nicobar Islands', Helpline: '+91-3192-232102'},
        {id: 30, State: 'Chandigarh', Helpline: '+91-9779558282'},
        {id: 31, State: 'Dadra and Nagar Haveli', Helpline: '104'},
        {id: 32, State: 'Daman and Diu', Helpline: '104'},
        {id: 33, State: 'Delhi', Helpline: '+91-11-22307145'},
        {id: 34, State: 'Jammu and Kashmir', Helpline: '+91-191-2520982,+91-194-2440283'},
        {id: 35, State: 'Ladakh', Helpline: '+91-1982-256462'},
        {id: 36, State: 'Lakshadweep', Helpline: '104'},
        {id: 37, State: 'Puducherry', Helpline: '104'}
      ],
      sampleColumns = [
        {id: 0, property: 'State', columnLabel: 'State'},
        {id: 1, property: 'Helpline', columnLabel: 'Helpline'}
      ]
      
function MyFilter({ filterProperties, onFilter }) {
    return (
        <Container>
            <hr></hr>
            <h1>State Helpline</h1>
            {filterProperties.map(({ property, id }) => (
                <TextField
                    key={id}
                    label={property}
                    name={property}
                    onKeyUp={onFilter} />
            ))}
            
        </Container>
    );
}

function MyTable({ tableData, tableColumns }) {

    const [helplineNos, setHelplineNos] = useState({});

    useEffect(() => {
        fetch("https://api.rootnet.in/covid19-in/contacts")
        .then(response => response.json())
        .then(data => {
        setHelplineNos(data);        
        })
    }, []);

  console.log(helplineNos);
    
    
    return (
        
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableColumns.map(({ id, columnLabel }) => (
                            <TableCell key={id}>
                                {columnLabel}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map(row => (
                        <TableRow key={row.id}>
                            {tableColumns.map(({ id, property }) => (
                                <TableCell key={id}>
                                    {row[property]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function Tables() { 
    const [state, setState] = useState({
        data: sampleData,
        columns: sampleColumns,
        filterObj: sampleColumns.reduce((r, { property }) => (r[property] = '', r), {})
    }),
        onFilterApply = ({ target: { name, value } }) => {
            const newFilterObj = { ...state.filterObj, [name]: value };
            setState({
                ...state,
                filterObj: newFilterObj,
                data: sampleData.filter(props => Object
                    .entries(newFilterObj)
                    .every(([key, val]) => !val.length ||
                        props[key].toLowerCase().includes(val.toLowerCase()))
                )
            });
        };

        console.log("HII");

        console.log(json.regional);
        
    return (
        <Container>
            <div>

            </div>
            <MyFilter
                filterProperties={state.columns}
                onFilter={onFilterApply} />
            <MyTable
                tableData={state.data}
                tableColumns={state.columns} />
        </Container>
    );
}
export default Tables
