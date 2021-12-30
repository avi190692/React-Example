import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import MyContext from "./MyContext";
import Car from "./Car";

const Cars = () => (
    <MyContext.Consumer>
        {context => (
            <>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                    <React.Fragment>
                    <Car id = {carID}
                         name={context.cars[carID].name}
                         price={context.cars[carID].price}
                         incrementPrice={() => context.incrementPrice(carID)}
                         decrementPrice={() => context.decrementPrice(carID)} > </Car>
                    
                    </React.Fragment>
            
               
        
                ))}
            </>
        )}
    </MyContext.Consumer>
);
export default Cars;