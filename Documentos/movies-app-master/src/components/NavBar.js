import React from 'react';

const NavItem = ({ element }) => {
	return (
		<li>
			<a href={element.href}>{element.label}</a>
		</li>
	);
};
const NavBar = (props) => {
    return (
        <nav>
            <ul>
                (props)
            </ul>
        </nav>
    )
}

export default NavBar