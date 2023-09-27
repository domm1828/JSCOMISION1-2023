'use client'

import { useRef, useState, useEffect } from "react";

export const FormContact = ({persons,updatePersons,editPerson}) => {

    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const inputRefName = useRef(null);
    const [edit,setEdit] = useState(false);


    const handleClean = () =>{
        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setEdit(false);
        inputRefName.current.focus();
    }

    const handleSubmit = () =>{
        if(edit == false){
            const person = [{
                name,
                lastName,
                phone,
                email
            }];
            //spread iterables
            updatePersons([...persons,...person])
        }
        else{
            persons[editPerson.id].name = name;
            persons[editPerson.id].lastName = lastName;
            persons[editPerson.id].phone = phone;
            persons[editPerson.id].email = email;

            updatePersons([...persons]);


        }

        handleClean()
    }
    
    useEffect(()=>{
      if(editPerson != null){
        setName(editPerson.name);
        setLastName(editPerson.lastName);
        setEmail(editPerson.email);
        setPhone(editPerson.phone);
        setEdit(true)
        console.log(editPerson)
      }
    },[editPerson])

    return (<>
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information {name} {lastName}
            {phone} {email}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            value={name}
                            onChange={(e)=>{
                                setName(e.target.value);
                            }}
                            ref={inputRefName}
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            value={lastName}
                            onChange={(e)=>{
                                setLastName(e.target.value);
                            }}
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


                <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone
                    </label>
                    <div className="mt-2">
                        <input
                            value={phone}
                            onChange={(e)=>{
                                setPhone(e.target.value);
                            }}
                            id="phone"
                            name="phone" 
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={handleClean} type="button" className="bg-red-600 text-sm font-semibold rounded-md px-3 py-2  text-white">
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {edit ? 'Save Edit' : 'Save' } 
                </button>
            </div>
        </div>
    </>);
}