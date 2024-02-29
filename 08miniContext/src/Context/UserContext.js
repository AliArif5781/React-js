import React from "react";
// yeh .js is lya banaya khu ki koi bi .jsx return ni kr rha tha is lya.Ab UserContextProvider name sa file banai para gi  .jsx file bananai para gi khu jo hm fragment la rha tha usa top level pa rakna para ga tbhi tu sara varible ma access ho pai ga.
const UserContext = React.createContext()                                // createContext() is a method like useState()

export default UserContext;                   // jasa apna context banaya tu context kya hota ha apko major cheez deh ga provider.khu ki context ha kya varibale provide hi kr rha ha tu har ak context ak provider hota ha.UserContext bi apna ap ma ak provider ha.


{/*<UserContext>*/}       {/* hm sabhi ko rap krwa deh ga UserContext sa  . Jasa rap krwa diya  is tra sa tu yeh bn jai ga provider.Provider mean ab koi bi isma component ha like <login/> e.t.c un sara component ko global UserContext ka access mil jai ga.Kiska mila ga  line no.3 ko.Context is like global variable.Provider bi bahnana prta ha.*/}
    {/* <Login/> */}
    {/* <Card/> */}
    {/* <Data/> */}
{/* <UserContext/> */}


{/*   What is Context api?
The Context API is a feature in React.js that allows you to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.
*/}