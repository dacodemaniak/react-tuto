import { useSelector } from 'react-redux'

const ToolbarComponent = () => {
    const total = useSelector((state) => {
        return state.personList.personList.length
    })
    return (
        
            <div className="toolbar">
                <div className="total-person">
                    <span className="label">Total persons : </span>
                    <span className="total">{ total }</span>
                </div>
        </div>
    )
}

export default ToolbarComponent