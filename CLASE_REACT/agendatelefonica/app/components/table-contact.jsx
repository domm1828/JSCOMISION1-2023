'use client'
//import { Persons } from '@/app/components/person'
import { TrashIcon, PencilIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react';

export const TableContact = ({ persons, deletePersons, handleClikEdit }) => {

    const [search, setSearch]= useState('');
    const [listPerson , setListPerson] = useState(persons)

    const handleSearch = ()=>{
        console.log(search)
        let param = search.trim().toLowerCase();
        let filterPerson = persons.filter((person)=>{
            return person.name.toLowerCase().includes(param) || person.lastName.toLowerCase().includes(param);
        });

        setListPerson(filterPerson);
        
    }

    useEffect(()=>{
        //handleSearch();
        setSearch('');
        setListPerson(persons)
    },[persons])

    return (
        <>
            <div className='p-3'>
                <input
                    value={search}
                    onChangeCapture={(e)=>{setSearch(e.target.value)}}
                    onKeyUp={handleSearch}
                    type="text"
                    name="filter"
                    id="filter"
                    placeholder='Filter by Full names'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <table className="w-full">
                <thead className="bg-black border-4   border-b-indigo-500 ">
                    <tr>
                        <th className="text-white">First name</th>
                        <th className="text-white">Last name</th>
                        <th className="text-white">Email address</th>
                        <th className="text-white">Phone</th>
                        <th className="text-white">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listPerson.map((person, index) => (
                        <>
                            <tr key={index}>
                                <td>{person.name}</td>
                                <td>{person.lastName}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            handleClikEdit(person, index)
                                        }}
                                        type="button"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <PencilIcon className='h-6 w-6 text-white-500' />
                                    </button>
                                    <button
                                        onClick={() => { deletePersons(index) }}
                                        type="button"
                                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    >
                                        <TrashIcon className='h-6 w-6 text-white-500' />
                                    </button>
                                </td>
                            </tr>
                        </>
                    ))}

                </tbody>
            </table>
        </>);

}