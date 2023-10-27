/**
 * HeaderComponent
 * Shows table header for persons list
 * @version 1.0.0
 * @version 1.0.1
 *  Add column for delete button
 * @param {*} props 
 * @returns 
 */
const HeaderComponent = (props) => {
    return <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
}

export default HeaderComponent