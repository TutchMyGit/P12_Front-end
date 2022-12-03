import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import '../../styles/search.css';

export function Search({preGlobalFilteredRows, globalFilter, setGlobalFilter}) {

    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);

    // put 300 delay for better user's experience
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 300);

    return (
        <div className="search">
            <label>
                Search: 
                <input value={value || ''} onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}  placeholder={`${count} records...`}
                    type="search"
                />
            </label>
        </div>
    )
}