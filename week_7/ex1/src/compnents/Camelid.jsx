function Fact ({name, desc, image}) {
    console.log(name, desc) 
    return (
        <>     
        <div>
            <h2>{name}</h2>
            <h4>{desc}</h4>
            <figure>
                {image}
            </figure>
        </div> 
        </>
    ); 
}
export default Fact;