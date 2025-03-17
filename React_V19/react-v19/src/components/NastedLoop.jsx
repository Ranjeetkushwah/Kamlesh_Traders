import React from 'react';
import Company from './Company';

const NastedLoop = () => {

    let companys = [
        {
            companyName: "Brain Inventry",
            companyWebsite: "www.brainInventory.com",
            address: "indore",
            employee: [
                {
                    name: "peter",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "perter@bi.com"
                },
                {
                    name: "Jhon",
                    position: "software developer",
                    phoneNo: "9887984563",
                    emailId: "Jhon@bi.com"
                },
                {
                    name: "Rock",
                    position: "software developer",
                    phoneNo: "988234344563",
                    emailId: "Rock@bi.com"
                },
                {
                    name: "hitler",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "hitler@bi.com"
                },
            ]
        },
        {
            companyName: " Inventry",
            companyWebsite: "www.Inventory.com",
            address: "Navi mumbai",
            employee: [
                {
                    name: "peter",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "perter@bi.com"
                },
                {
                    name: "Jhon",
                    position: "software developer",
                    phoneNo: "9887984563",
                    emailId: "Jhon@bi.com"
                },
                {
                    name: "Rock",
                    position: "software developer",
                    phoneNo: "988234344563",
                    emailId: "Rock@bi.com"
                },
                {
                    name: "hitler",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "hitler@bi.com"
                },
            ]
        },
        {
            companyName: "Apple",
            companyWebsite: "www.Apple.com",
            address: "USA",
            employee: [
                {
                    name: "peter",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "perter@bi.com"
                },
                {
                    name: "Jhon",
                    position: "software developer",
                    phoneNo: "9887984563",
                    emailId: "Jhon@bi.com"
                },
                {
                    name: "Rock",
                    position: "software developer",
                    phoneNo: "988234344563",
                    emailId: "Rock@bi.com"
                },
                {
                    name: "hitler",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "hitler@bi.com"
                },
            ]
        },
        {
            companyName: "Alibada",
            companyWebsite: "www.Alibhaba.com",
            address: "China",
            employee: [
                {
                    name: "peter",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "perter@bi.com"
                },
                {
                    name: "Jhon",
                    position: "software developer",
                    phoneNo: "9887984563",
                    emailId: "Jhon@bi.com"
                },
                {
                    name: "Rock",
                    position: "software developer",
                    phoneNo: "988234344563",
                    emailId: "Rock@bi.com"
                },
                {
                    name: "hitler",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "hitler@bi.com"
                },
            ]
        },
        {
            companyName: "Germmi",
            companyWebsite: "www.germmi.com",
            address: "Germany",
            employee: [
                {
                    name: "peter",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "perter@bi.com"
                },
                {
                    name: "Jhon",
                    position: "software developer",
                    phoneNo: "9887984563",
                    emailId: "Jhon@bi.com"
                },
                {
                    name: "Rock",
                    position: "software developer",
                    phoneNo: "988234344563",
                    emailId: "Rock@bi.com"
                },
                {
                    name: "hitler",
                    position: "software developer",
                    phoneNo: "9884563",
                    emailId: "hitler@bi.com"
                },
            ]
        },
    ]
    return (
        <>
            <h1>Nested loops</h1>

            {
                companys.map((company, index) => (
                    <div key={index}> 

                         <Company company={company} />
                    </div>
                ))

            }

        </>
    );
}

export default NastedLoop;
