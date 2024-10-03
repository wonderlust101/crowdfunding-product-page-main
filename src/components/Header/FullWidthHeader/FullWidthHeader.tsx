import './FullWidthHeader.scss'

type link = {
    title: string;
    href: string;
}

type fullWidthHeader = {
    links: link[];
}

export default function FullWidthHeader({links}:fullWidthHeader) {
    return (
        <nav className='full-width-header'>
            <ul className="full-width-header__links">
                {links.map((link) => (
                    <li key={link.title}>
                        <a className="full-width-header__link" href={link.href}
                           aria-label={`Go to ${link.title} Page`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}