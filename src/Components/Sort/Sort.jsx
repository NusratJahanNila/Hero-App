import React, { useState } from 'react';

const Sort = ({install, setInstall}) => {
    // Sort
    const [sort, setSort] = useState([]);
    // Sort Function
    const handleSort = (type) => {
        setSort(type);
        if (type === 'HighToLow') {
            const sortDesc = [...install].sort((a, b) => b.downloads - a.downloads);
            setInstall(sortDesc);
        }
        if (type === 'LowToHigh') {
            const sortAsc = [...install].sort((a, b) => a.downloads - b.downloads);
            setInstall(sortAsc);
        }
    }
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">Sort By Downloads: {sort ? sort : ""} </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={() => handleSort('HighToLow')}>High-Low</a></li>
                <li><a onClick={() => handleSort('LowToHigh')}>Low-High</a></li>
            </ul>
        </div>
    );
};

export default Sort;