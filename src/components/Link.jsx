

const Link = ({ children, href }) => {
    return (
         <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    );
}

export default Link;
