import React from 'react';
import CompEmployee from './CompEmployee';

const Company = ({ company }) => {

    return (
        <>


            <ol >
                <li>{company?.companyName}</li>
                <li>{company?.companyWebsite}</li>
                <li>{company?.address}</li>
                <ol>
                   
                        {company.employee.map((employe, index) => (

                            <div key={index}>
                               <li><CompEmployee employe={employe} index={index} /></li> 
                            </div>
                        ))}
                  
                </ol>
            </ol>


        </>
    );
}

export default Company;
