import { Web3Button } from '@web3modal/react'
import "./Nav.css";
function Nav () {
    return(
        <>
            <nav className="nav">

                <div>
                    <h1> MAGIC TOUCH </h1>
                </div>

                <div>
                    <w3m-button className='hello' />
                </div>              
            </nav>
        </>
    );
}

export default Nav;
