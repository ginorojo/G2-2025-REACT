
import './App.css'
import Card from './Card.jsx'

function App() {
  

  return (
   <div className=''>
     
    <div className='flex flex-col justify-center px-[50px] pt-8 md:flex-row md:justify-between md:items-start'>
      <h1 className='flex justify-center text-3xl font-semibold md:pt-5 '>The creative crew</h1>
     
      <div className='md:w-[280px]'>
         <br />
        <h3 className='font-semibold text-[15px]'>Who we are</h3>
        <p className=''>We are team of creatively diverse driven 
        innovative individuals working in varius locations from the world.</p>
      </div>
    </div>
    <br />

     <section className=' md:pt-10 md:grid-cols-3 grid grid-cols-2 place-items-center px-[20px] '>
        <Card
            img ="/photo1.png"
            nombre ="Bill Mahoney"
            cargo = "PRODUCT OWNER"
                
        />
        <Card
            img ="/photo2.png"
            nombre ="Saba Cabrera"
            cargo = "ART DIRECTOR"
                
        />
        <Card
            img ="/photo3.png"
            nombre ="Shae Le"
            cargo = "TECH LEAD"
          
                
        />
        <Card
            img ="/photo4.png"
            nombre ="Skylah Lu"
            cargo = "UX DESIGNER"
                
        />
        <Card
            img ="/photo5.png"
            nombre ="Griff Richards"
            cargo = "DEVELOPER"
                
        />
        <Card
            img ="/photo6.png"
            nombre ="Stahn Jhon"
            cargo = "DEVELOPER"
                
        />

     </section>
   </div>

   
  )
}

export default App;
