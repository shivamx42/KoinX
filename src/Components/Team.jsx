import React from 'react'
import TeamProps from './TeamProps'

export default function Team() {

  return (
    <>
        <div className=' bg-white rounded-lg m-10 w-90p p-4'>
            <h1 className='font-bold text-lg'>Team</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facere eligendi neque, corporis excepturi qui id asperiores sed nihil quod.</p>


            <TeamProps src="/images/profile1.jpg" name="John Smith" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat ab eveniet expedita minus vel, accusantium sapiente veritatis quaerat odio illum nam impedit dignissimos sed modi maxime suscipit aperiam, consectetur cumque ratione incidunt nemo. Veniam nobis pariatur deleniti? Itaque voluptatem enim adipisci ipsum commodi nemo corporis culpa neque, iure alias."/>
            <TeamProps src="/images/profile2.jpg" name="John Smith" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat ab eveniet expedita minus vel, accusantium sapiente veritatis quaerat odio illum nam impedit dignissimos sed modi maxime suscipit aperiam, consectetur cumque ratione incidunt nemo. Veniam nobis pariatur deleniti? Itaque voluptatem enim adipisci ipsum commodi nemo corporis culpa neque, iure alias."/>
            <TeamProps src="/images/profile3.jpg" name="Ellina Williams" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat ab eveniet expedita minus vel, accusantium sapiente veritatis quaerat odio illum nam impedit dignissimos sed modi maxime suscipit aperiam, consectetur cumque ratione incidunt nemo. Veniam nobis pariatur deleniti? Itaque voluptatem enim adipisci ipsum commodi nemo corporis culpa neque, iure alias."/>

        </div>
    </>
  )
}


