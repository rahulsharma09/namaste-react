import React from "react";
import ReactDOM from 'react-dom/client'

const Header = () => {
    return(
        <div className="header">
            <div>
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
          <h1>Hello</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);