'use client'
import { Persons } from '@/app/components/person'
import { TrashIcon, PencilIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const TableContact = () => {

    return (
        <>
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
                    {Persons.map((person, index) => (
                        <>
                            <tr key={index}>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                       <PencilIcon className='h-6 w-6 text-white-500' />
                                    </button>
                                    <button
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