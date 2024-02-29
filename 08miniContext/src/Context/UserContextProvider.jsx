import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


const UserContextProvider = ({children}) => {    {/* apko yaad hoga hmna Outlet seekha tha react router ma jo bi value ha <Header/> and <Footer/> asatis mean (jisma changing ni kr pai)  or <Outlet/> jo bi ha  display krwa do.Usi tra ka ak aur concept hota ha jo bi prop a rha ha like children unko asatis ap yaha pa use kr lo.jo a rha ha usko asatis pass kr do.Apka pass jo bi props a rha ha children usko asatis pass kr do.Children kuch majical ni hota ha jasa ap apna div data ho wohi children ha.Children ha jehnarik name ha jo bi apka pass a rha ha usko asatis pass kr do. */}
    const [user,setUser] = useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>    {/* apna provider sa rap tu kr diya actually ma kon si value ka access da rha ho wo bi apko btana para ga. uska liya provider ma hmeh ak property milti ha usa kehta ha prop  */}
        {children}             {/*children asatis render krwa deh ga.Isma ho skta ha ki card component ai.Ho skta ha ki card ka andhr dashboard ai.children likna ka mtlb jo bi a rha ha usko asatis pass kr do lakin usko rap bi krna para ga with .Provider .Apna Provider sa rap tu kr diya but kon si value access deh rha ho usko andhr Provider ma hmeh property milti ha jo ki prop ha.Props jo ha value isma ma {} pass kr do ga, isma mara jo dil chaha data deh skta ho. */}
        </UserContext.Provider>

    )

}

export default UserContextProvider;