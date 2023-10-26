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
        gender: 'm',
        occupation: 0,
        linkedIn: 'https://www.linkedin.com/in/ideafactory31/',
        facebook: 'https://www.facebook.com/profile.php?id=100070373165180'
    }

    /**
     * Format name, firstname and gender from a person type
     * @param {*} person 
     * @returns JSX
     */
    const formatName = (person) => <h2>
        <span>{ singlePerson.gender === 'm' ? 'M.' : 'Mme'}</span> {person.firstname} {person.lastname}
    </h2>

    // Complex expression
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

    // For more complex condition, you may use a function
    const occupation = (person) => {
        if (person.occupation === 0) {
            return 'Teacher'
        } else if (person.occupation === 1) {
            return 'Student'
        }

        return 'Other'
    }

    // Sets some CSS class name in a string array
    const classes = ['header']

    if (singlePerson.gender === 'm') {
        classes.push('male')
    } else {
        classes.push('female')
    }

    return <>
        <div className="card">
                <div className={ classes.join(' ')}>
                    { formatName(singlePerson) }
                </div>
                <div className="occupation">
                    { occupation(singlePerson) }
                </div>
                { socialList }
        </div>
    </>
}

export default PersonComponent