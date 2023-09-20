import Image from 'next/image'
import { FormContact } from '@/app/components/form-contact';
import { TableContact } from '@/app/components/table-contact';

export default function Home() {
  return (
    <main className=" p-10">
       
        <div className="grid grid-cols-2 gap-4">
          <div><FormContact/></div>
          <div><TableContact/></div>
        </div>
 
    </main>
  )
}
