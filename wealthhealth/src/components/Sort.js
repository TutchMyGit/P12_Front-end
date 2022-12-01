// A GARDER EN RESERVE AU CAS-OU

function Sort() {
    return (
        <div className="sort">
            <label>
                Show 
                <select name="entries" id="entries">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                 entries
            </label>
        </div>
    )
}

export default Sort