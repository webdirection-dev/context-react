import React from "react";
import MyContext from "./Context";

// Способ 1. Контекст для функциональной архитектуры
// const Name = () => {
//     return (
//         <MyContext.Consumer>
//             {
//                 (value) => {
//                     return(
//                         <div className='name'>
//                             My name is {value}
//                         </div>
//                     )
//                 }
//             }
//         </MyContext.Consumer>
//     )
// };
//
// export default Name;

// Способ 2. Контекст для классовой архитектуры
export default class Name extends React.Component {
    render() {
        const {name, age} = this.context
        return (
            <div className='name'>
                My name is {name}, age {age}.
            </div>
        )
    }
}

Name.contextType = MyContext;
