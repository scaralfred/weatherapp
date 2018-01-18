import React from 'react';
import "../header/header.css";
import Logo from "../../components/UI/logo/logo";
import Title from "../../components/title/title";

const header = () => {
return (
<header className="Header">
    <Logo />
    <Title />
</header>
);
}

export default header