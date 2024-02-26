import React , {useId} from 'react'


function InputBox({          // InputBox 2 input la rha ha apsa ak label and className agr clasName ni ha tu default dal di empty className=""
    label,
    amount,
    onAmountChange,
    onCurrnecyChange,
    CurrencyOptions = [],
    selectCurrnecy = 'usd',
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
   
    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>   {/* if you notice ki yaha pa css ``(backtick ma use ki gai ha) yaha pa jo css ha wo javaScript ma backticks ma likhi ha acha yeh khu liki ha yeh is lya liki ha ki user sa line no.7 sa css bi la rha ho .HO skta ha ki user sa usko alag sa dikana ho  aur apna sa kuch apni css inject krna chata ho tu is lya likha ha. */}
                    <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}       {/* {} wrap is lya kiya taki variable sa data ajai. */}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}  // && is lya use kiya ha agr onAmountChange aviable ha   tu hm onAmountChange ko use kreh ga.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrnecy}
                    onChange={(e)=> onCurrnecyChange && onCurrnecyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    
                        {CurrencyOptions.map((currnecy)=> (
                            <option  key={currnecy} value= {currnecy}>     {/* component return kr diya ha , but har baar yahi value repeat hogi lakin problem ha ki is tra sa value apki repeat hoti ha tu perform ma react boht hit krta ha.khu kireact ko pata ni jo dom banai ja rha tu wo ak hi element thousnad baar ni bana rha ha.tu isko rokna ka liya actually ma apka liya ak field ata ha tu key pass krni pra gi.  //////  IMPORTANT: agr apko performance lani ha loop ka andhr element ko repeat krna ka liya tu apko key pass krni hi chayeh.*/}
                            {currnecy}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
