import {createSlice,nanoid} from '@reduxjs/toolkit'// createSlice bana ka liya 3 cheeza chayeh hoti ha: 1-name , 2-initialstate 3-reducrs ki lists in line no.15,16,17    //nanoid is a method for generating unique id.


// Apko pata ha sbsa phela store ka andhr initial state ka store starting ma kasa dikha ha empty hoga,pmty hoga , ya koi value hogi,ya database sa value fetch krka dalo ga.

const initialState = {    // initialState totally ap pa ha ki ap array bi ho skti ha aur object bi.
    todos:[{id:1,text:"Hello world"}]             //  by default id and text value.

}                 


// Now we making slice is a better version of reducer.Reducer is functionality

export  const todoSlice = createSlice({       // createSlice is a method method ma zaida tr object ai ga.
    name: 'todo',                              // slice ka name hota ha but jo bi name raka ga soch samj kr rakiya ga khu ki jb hm redux toolkit raka ga(chrome extension ) wha pa yahi name show hoga.
    initialState,                           // har slice ka initialState hota ha.
    reducers:{                       // reducer is object    , isma ati ha property and funtion
        addTodo: (state,action)=>{    // addTodo is a property and inisde it write funtion.we can also write funtion outside and give him a reference.            // jb ap yeh likho ga tu 2 cheezo ka access mila ga it,s a syntax .hamesha 2 cheeza mila gi .(1-state and 2-action). ....State =   state variable apko access da ga initialState ma abhi kya kya value ha unka access da ga.Aga ja kr change ho jai gi but abhi us state ka andhr kya value ha unka access da ga  ...action =  kahi baar ho skta ha ki apka pass value ai remove khud remove tu ni hoga na id tu laga gi  tu id dana ka liya tu kuch value mijah bi tu chaheh gi  jb ma removeTodo: method ko call kro ga tu wo values action sa mila gi.      
                const todo = {        // object khu ki array ma object hi tu push ho rha ha initialState ma.
                    id:nanoid(),              // id unique honi chayeh. Date.now() bi use kr skta ha but better way is use nanoid
                    text: action.payload,            //String kha sa lo ga hello World tu sb ma ni da lo ga khu ki ho skta ha ki wo apko kuch bheajh rha ho ap hello world hi add kra ja rha ho .tu yeh action sa nikala ga.Payload is a object , object ma id , email kuch bi a skta ha.After this , abhi todo banaya ha , lakin yeh todo state ka andhr ni gya.initialState tu bata di but state ko update bi krna para ga .Ab yaha pa ati ha
                }
                state.todos.push(todo)           // First state ka access lo. initialState state ha uska andhr todos: ha unka access kr rha ho aur value ko push kr rha ho.
                // apko  ab pata chal gya state kasa access lana ha aur action ka through remove kasa krna ha. 


        },                  
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }                     

})         

// actually ma 2 part iska export krna hota ha it,s a syntax
// 1- jitni bi funtionality ha unko export kra ga in reducers addTodo and removeTodo isi ka through hi state ko change kra ga yeh funtionaality indiviually kam ai gi.
export const {addTodo,removeTodo} = todoSlice.actions     // yeh indiviual functonality export kri khu ki yeh component  ma kam ai ga.
// abhi store.js akela hi ghom rha ha is Store.js ko bi awairness chayeh in sara reducers ka bareh ma.agr isko awairness ni ha tu Store.js maintain ni kr pai ga. khu ki yeh restrictive store ha ki yeh har kisi sa value la kr update ni kr lata ho.mara under jo jo reducers register kro ga unsa hi value la kr update krta ho.Is liya is sara ka sara reducers ka list chayeh hota ha.

export default todoSlice.reducer
