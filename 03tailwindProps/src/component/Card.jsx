// rfce likna sa line export thak like react functional component bana data ha.
import React from 'react'

function card({username,btnText="ALi"}) {   {/* inside card ({handling kehta ha}) aur yeh hmna destructing ki ha.Props ko hata kr direct destructing kr di jati ha.direct hi apna username la liya in currly brasis {username} tu apko har jasa props.username ni likna para ga. direct username lijiya same hi kam hoga. */}
  // console.log("props",props);
  // console.log(props.username); // This work when we write props in function paranthesis.Also a andothe method
  console.log(username);//  we can use this when we write username="e.t.c in App.jsx and we write inside function parathesis{username}=> username khu lika khu ki hmna App.jsx ma <Card username="Ali-Arif"/> card ma username likha ha is lya ."
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-5">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText || "agr hmna value pass ni ki tu || lga kr jo pass krni ha wo likh do.React bolta"} →  {/* agr hmna btnText App.jsx ma <Card/> component ma props pass ni kiya tu hm yaha pr || use kr ka value da skta ha in double comma "".But isma readability ka issue ata ha tu agr props ma value pass ni ki tu Card.jsx ma currly brasis ma value pass kr skta ha.*/}
    </button>
  </div>
</div>
  )
}

export default card
