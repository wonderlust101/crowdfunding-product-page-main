import logo from "/images/logo.svg";
import "./Header.scss";
import FullWidthHeader from "./FullWidthHeader";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type link = {
    title: string;
    href: string;
}

const links: link[] = [
    {
        "title": "About",
        "href" : "#"
    },
    {
        "title": "Discover",
        "href" : "#"
    },
    {
        "title": "Get Started",
        "href" : "#"
    },
];

export default function Header() {
    const {width} = useWindowDimensions();

    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <img className="header__logo" src={logo} alt="Crowdfund Logo"/>

                {width > 768 ? (
                    <FullWidthHeader links={links}/>
                ) : (
                    <></>
                )}
            </div>
        </header>
    );
}