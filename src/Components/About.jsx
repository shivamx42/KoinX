import React from 'react'
import AboutProps from './AboutProps'


export default function About() {
  return (
    <>
        <div className=' bg-white rounded-lg m-10 w-90p p-4'>

        <h1 className='font-bold text-lg mb-3'>About Bitcoin</h1>
        <p className='font-semibold mb-2'>What is Bitcoin?</p>
        
        <p className='mb-3'>
            Bitcoin's price today is IJS$16,951.82, with a 24-hour trading volume Of $19.14 B. BTC is +0.36% in the last
            24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time
            Iow of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>

        <hr />

        <p className='font-semibold my-2'>Lorem ipsum dolor sit amet.</p>
        <p className='mb-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias alias, ipsa molestiae deserunt reiciendis ea error, iure nobis dolor deleniti mollitia laborum nulla, quam et sunt numquam pariatur a explicabo sapiente odio facere. Quo blanditiis nam numquam dolorum quas tenetur unde voluptates eum recusandae, tempore quisquam. Veniam, nemo eos similique est vitae laboriosam earum iusto deleniti sit dolor placeat culpa illo hic. Quis repellat eum hic porro recusandae! Ab iusto excepturi temporibus? Saepe consequatur at odit culpa quo minima unde accusamus fugiat libero inventore reprehenderit nulla sit incidunt, iusto excepturi perferendis, tempore enim ullam et neque nisi! Blanditiis, odit.
            
        </p>

        <p className='mb-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium veritatis facilis officiis quae obcaecati voluptates maiores provident fugit quis sit sint, dolores dignissimos eius voluptatibus quibusdam impedit iure? Delectus quod pariatur totam tempora aspernatur earum aliquid rem cumque a. Esse totam repellendus aliquam dolorem earum nam ea nisi reiciendis!
        </p>

        <p className='mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam enim, quasi quis nesciunt minima cumque temporibus! Laborum consectetur temporibus omnis alias ut, pariatur sequi ipsum! Numquam repellendus ad, fugit doloremque soluta debitis asperiores, natus excepturi iure sit quidem, dolore veritatis illum? Nemo soluta perspiciatis fugit dolores minus dolorem dolor.
        </p>

        <hr />

        <p className='font-semibold my-2'>Already Holding Bitcoin?</p>

        <div className='md:flex items-center'>
            
            <AboutProps src="/images/about1.png" textProp="Calculate your Profits" color=" bg-blue-300" />
            <AboutProps src="/images/about2.png" textProp="Calculate your Profits" color=" bg-red-300" />
            
        </div>

        <hr />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, molestias rerum impedit asperiores id fugit vel aliquid, voluptate itaque rem beatae facilis hic! Numquam aspernatur accusantium, tenetur, vitae natus totam impedit aliquam cumque labore nostrum quo culpa ratione? Ab, facilis.

        </div>
    </>
  )
}
