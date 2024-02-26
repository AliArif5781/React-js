import React from 'react'
import {Link,NavLink} from 'react-router-dom'   // link is use in-replace of <a></a> (anchor) tag. Jb bi ap <a> tag use krta ha tu actually ma apka page refresh hota ha.Is liys link ue krta ha link ma jasa <a> tag ma href="" likta tha tu yaha pa to="" use krta ha.Ab Navlink lana ki zaroorat khu peash ai khu ki navlink apko kuch additional cheeza provide krta ha
// ap new tag dheakh rha hoga in line no.14 and 35 jasa ap react-router-dom install krta ho tu jasa apko react ka sat useState(),useEffect(),useCallback(),useRef() aur kafi cheeza milti ha.Usi tra sa jb ap react-router-dom bi use krta ho tu apko kuch cheeza milti ha now we import at top after 1 line.
export default function Header() {     //  yaha sa 1 hi line ma export default liya diya koi msla wli baat ni ha.
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                        <a></a>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to='/'
                                    className={({isActive}) =>   //  yaha sa className="" ma callback khu likna para aur uska baad classess `` backtick ma khu likna pari.asa ap kahi baar kreh ga.Tu home ko kasa pata ki wo home pa ha /home pa ya phr  about pa ja rha ha tu /about pa kasa jai. us hisab sa color highlight kasa kro. uska liya one of the best way ki callback ka andhr classes likha  aur callback ki class ko manupilate kasa krna ha tu kasa kreh .jb bi ap <NavLink> lata ha tu jo className agr ap is tra likhta ha tu usma directly accessable hota ha 1 variable ka us varibale ka name ha is active
                                    
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        //  ${isActive} krna sa automatically <NavLink> apko bata deh ga ki kya ap jis page pa ha wo active page ha kya kya ap /about page pa ho directly url sa matching krta ha.Url ma about  ha tu ap active ho us page ka andhr     ${isActive ? "True Statement" : "False Statement"}
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>   //  yaha sa className="" ma callback khu likna para aur uska baad classess `` backtick ma khu likna pari.asa ap kahi baar kreh ga.Tu home ko kasa pata ki wo home pa ha /home pa ya phr  about pa ja rha ha tu /about pa kasa jai. us hisab sa color highlight kasa kro. uska liya one of the best way ki callback ka andhr classes likha  aur callback ki class ko manupilate kasa krna ha tu kasa kreh .jb bi ap <NavLink> lata ha tu jo className agr ap is tra likhta ha tu usma directly accessable hota ha 1 variable ka us varibale ka name ha is active
                                    
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        //  ${isActive} krna sa automatically <NavLink> apko bata deh ga ki kya ap jis page pa ha wo active page ha kya kya ap /about page pa ho directly url sa matching krta ha.Url ma about  ha tu ap active ho us page ka andhr     ${isActive ? "True Statement" : "False Statement"}
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to='/Contact'
                                    className={({isActive}) =>   //  yaha sa className="" ma callback khu likna para aur uska baad classess `` backtick ma khu likna pari.asa ap kahi baar kreh ga.Tu home ko kasa pata ki wo home pa ha /home pa ya phr  about pa ja rha ha tu /about pa kasa jai. us hisab sa color highlight kasa kro. uska liya one of the best way ki callback ka andhr classes likha  aur callback ki class ko manupilate kasa krna ha tu kasa kreh .jb bi ap <NavLink> lata ha tu jo className agr ap is tra likhta ha tu usma directly accessable hota ha 1 variable ka us varibale ka name ha is active
                                    
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        //  ${isActive} krna sa automatically <NavLink> apko bata deh ga ki kya ap jis page pa ha wo active page ha kya kya ap /about page pa ho directly url sa matching krta ha.Url ma about  ha tu ap active ho us page ka andhr     ${isActive ? "True Statement" : "False Statement"}
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                to='/github'
                                    className={({isActive}) =>   //  yaha sa className="" ma callback khu likna para aur uska baad classess `` backtick ma khu likna pari.asa ap kahi baar kreh ga.Tu home ko kasa pata ki wo home pa ha /home pa ya phr  about pa ja rha ha tu /about pa kasa jai. us hisab sa color highlight kasa kro. uska liya one of the best way ki callback ka andhr classes likha  aur callback ki class ko manupilate kasa krna ha tu kasa kreh .jb bi ap <NavLink> lata ha tu jo className agr ap is tra likhta ha tu usma directly accessable hota ha 1 variable ka us varibale ka name ha is active
                                    
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        //  ${isActive} krna sa automatically <NavLink> apko bata deh ga ki kya ap jis page pa ha wo active page ha kya kya ap /about page pa ho directly url sa matching krta ha.Url ma about  ha tu ap active ho us page ka andhr     ${isActive ? "True Statement" : "False Statement"}
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


