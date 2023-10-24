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

    const formatName = (person) => <h2>{person.firstname} {person.lastname}</h2>

    return formatName(singlePerson)
}

export default PersonComponent