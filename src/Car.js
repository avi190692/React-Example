import { Fragment } from "react/cjs/react.production.min";

 const Car = props => (
    <>
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button> 

    </>
 );
 
 export default Car;
