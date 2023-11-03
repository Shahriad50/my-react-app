
function Car(props){
    return <h2> I am a {props.brand.model}!</h2>
}
const content=()=>{
    const carInfo={name:"Ford",model:"Mustang"}
    return(
        <>
        <h1>Who lives in my Garage? </h1>
        <Car brand={carInfo}/>
        
        </>
    )
}
export default content
