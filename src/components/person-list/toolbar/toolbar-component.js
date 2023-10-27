const ToolbarComponent = (props) => {
    return <div className="toolbar">
        <div className="total-person">
            <span className="label">Total persons : </span>
            <span className="total">{ props.total }</span>
        </div>
    </div>
}

export default ToolbarComponent