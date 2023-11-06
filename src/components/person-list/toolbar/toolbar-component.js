import personStore from "../../../reducers/person-reducer"

const ToolbarComponent = () => {
    const total = personStore((state) => state.personList.length)
    return <div className="toolbar">
        <div className="total-person">
            <span className="label">Total persons : </span>
            <span className="total">{ total }</span>
        </div>
    </div>
}

export default ToolbarComponent