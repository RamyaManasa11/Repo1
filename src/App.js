import React from "react"
import ChatBot from 'react-simple-chatbot';
import DisplayTable from "./components/displayTable";
import DisplayUsers from "./components/DisplayUsers";
// import {Segment} from 'semantic-ui-react';


function App(){

  const steps=[
    {
      id:'Greet',
      message:'Hii',
      trigger: 'Help'
    },
    {
      id:'Help',
      message:'How may i help you',
      trigger: 'Query'
    },
    {
      id:'Query',
      message:'Please Select a option from below to proceed ahead with your query',
      trigger: 'issues'
    },
    {
      id:'issues',
      options:[
        {value:"Laptop related issues", label: "Laptop Related Issues", trigger:"Laptop Related Issues"},
        {value:"HR Related Issues", label: "HR Related Issues", trigger:"HR Related Issues"},
        {value:"Domain Change", label: "Domain Change", trigger:"Domain Change"},
        {value:"Tools Installation", label: "Tools Installation", trigger:"Tools Installation"},
      ],
    },
    {
      id:'Laptop Related Issues',
      message:'Please raise a ticket under MyHCL->ServiceExchange',
      trigger: 'issues'
    },
    {
      id:'HR Related Issues',
      message:'Please raise a ticket under MyHCL->SSD',
      end: true
    },
    {
      id:'Domain Change',
      message:'Please Connect with your RM',
      end: true
    },
    {
      id:'Tools Installation',
      message:'Please select your tool from tarmac and raise a request',
      end: true
    }
  ];


  return(
    <>
      {/* <Segment floated="right"> */}
        <ChatBot steps={steps}/>
         {/* <DisplayUsers/> */}
       {/* </Segment> */}
    </>
  );
}

export default App;