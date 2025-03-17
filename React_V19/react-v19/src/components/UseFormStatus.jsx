import React from 'react';
import {useFormStatus } from 'react-dom';

const UseFormStatus = () => {

    const handelSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log("submitted;");
    }

    const CustomerForm = () => {

        const { pending } = useFormStatus();
        console.log(pending);
        return (
            <>
                <input type="text" placeholder='enter username' />
                <br />
                <br />
                <input type="password" name="" id="" placeholder='enter password' />
                <br />
                <br />
                <button disabled={pending}>{pending ? "Submiting...." : "submit"}</button>


            </>)
    }


    return (
        <React.Fragment>

            <h1>Use Form status hook</h1>
            <form action={handelSubmit}>
                <CustomerForm />

            </form>

            <br />
            <hr />
            <br />

        </React.Fragment>
    );
}

export default UseFormStatus;
