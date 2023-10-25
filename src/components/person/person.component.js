/**
 * PersonComponent
 * Display Person detail
 * @version 1.0.0 Display only firstname and lastname from a function
 * @version 1.0.1 Display social links in an ul / li structure
 * @version 1.0.2 Add some styles to component
 * @see ./person.component.css
 */

import './person.component.css'

const PersonComponent = (props) => {
    const singlePerson = {
        firstname: 'Jean-Luc',
        lastname: 'Aubert',
        linkedIn: 'https://www.linkedin.com/in/ideafactory31/',
        facebook: 'https://www.facebook.com/profile.php?id=100070373165180'
    }

    const formatName = (person) => <h2>{person.firstname} {person.lastname}</h2>
    const socialList = <ul>
        <li>
            <a href={singlePerson.linkedIn} target="_new" title={`Profil de ${singlePerson.firstname} ${singlePerson.lastname}`}>
                    LinkedIn
            </a>
        </li>
        <li>
            <a href={singlePerson.facebook} target="_new" title={`Facebook de ${singlePerson.firstname} ${singlePerson.lastname}`}>
                    Facebook
            </a>
        </li>
    </ul>
    return <>
        { formatName(singlePerson) }
        { socialList }
    </>
}

export default PersonComponent