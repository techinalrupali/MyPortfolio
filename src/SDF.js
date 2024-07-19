<div className="container">
<div className="row">
   <div className="col">
       <header className=" text-gray-400 font-helvetica p-3">
        <h4>Eduction</h4> 
       </header>
      <div className="border-l-4 border-blue-950 px-3">
            {
              educ_info.map((edu,i)=>(
                <div className="box relative p-3 border-2 border-blue-400 bg-blue-950 cursor-pointer text-white text-start mb-3">
                    <h4>{edu.year}</h4>
                    <h3>{edu.std}</h3>
                    <p>{edu.school}</p>
                </div>
                
              ))
            }
      </div>

   </div>

   <div className="col">
       <header className="text-gray-400 font-helvetica p-3">
        <h4>Experience</h4>
       </header>
     

   </div>
</div>

</div>