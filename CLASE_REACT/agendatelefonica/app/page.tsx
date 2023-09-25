"use client"
import { FormContact } from '@/app/components/form-contact';
import { TableContact } from '@/app/components/table-contact';
import { useEffect, useState } from 'react';

export default function Home() {
  const [persons,setPersons] = useState([]);
  const [editPerson,setEditPerson] = useState(null);
  const [indexUpdate,setIndexUpdate] = useState(-1);


  const deletePerson = (index:number) =>{
    
    console.log(persons)
    let personsDelete = persons.splice(index,1);
    setPersons(personsDelete);
  }
  const handleClikEdit = (person:any,index:number)=>{
    const element ={id:index}
    setEditPerson({...person,...element});
    setIndexUpdate(index);
  }

  useEffect(()=>{
    console.log(persons)
  },[persons])

  return (
    <main className=" p-10">
       
        <div className="grid grid-cols-2 gap-4">
          <div><FormContact persons={persons} updatePersons={setPersons} editPerson={editPerson} /></div>
          <div><TableContact persons={persons} deletePersons={deletePerson} handleClikEdit={handleClikEdit} /></div>
        </div>
 
    </main>
  )
}
