/**
 * PersonComponent
 * Display Person detail
 * @version 1.0.0 Display only firstname and lastname from a function
 */
const PersonComponent = (props) => {
    const singlePerson = {
        firstname: 'Jean-Luc',
        lastname: 'Aubert',
        linkedIn: 'https://www.linkedin.com/in/ideafactory31/',
        facebook: 'https://www.facebook.com/profile.php?id=100070373165180'
    }

    const linkedIn = <a href="https://www.linkedin.com/in/ideafactory31/" target="_new" title={"Profil LinkedIn de " + singlePerson.firstname + " " +  singlePerson.lastname }>LinkedIn</a>
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