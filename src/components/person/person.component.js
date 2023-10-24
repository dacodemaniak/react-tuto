/**
 * PersonComponent
 * Display Person detail
 * @version 1.0.0 Display only firstname and lastname from a function
 */
const PersonComponent = (props) => {
    const singlePerson = {
        firstname: 'Jean-Luc',
        lastname: 'Aubert'
    }

    const linkedIn = <a href="https://www.linkedin.com/in/ideafactory31/" target="_new" title={"Profil LinkedIn de " + singlePerson.firstname + " " +  singlePerson.lastname }>LinkedIn</a>
    const formatName = (person) => <h2>{person.firstname} {person.lastname}</h2>

    return <>
        { formatName(singlePerson) }
        { linkedIn }
    </>
}

export default PersonComponent