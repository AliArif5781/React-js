import {useEffect , useState} from "react"


function useCurrencyInfo(currency){
    const [data,setData] = useState({})    // useState({}) ma directly hm empty object dal data ha , incase agr fetch call ni a rhi ha  tu atleast yeh hamra contenjancy plan hogya ha , agr kuch value ni a rhi ha empty object ha us pa loop lgao ga tu crash ni kreh ga.
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    }, [currency])                   // currency ma agr change ho tu ma dobara call krwna chaho ga tu yeh dependency ha isko .is lya isko dependency array bolta ha.
    console.log(data);
    return data
}

export default useCurrencyInfo;