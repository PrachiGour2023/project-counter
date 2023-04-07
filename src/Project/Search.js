import React, { useState } from 'react'
import Data from '../MOCK_DATA.json';

const SearchData = () => {

    const [searchData, setSearchData] = useState('');
    //   console.log(searchData)
    return (
        <div>
            <input type='text' name='search' placeholder='Search...' onChange={(e) => setSearchData(e.target.value)} />
            {
                Data.filter((val) => {
                    if (searchData === "") {
                        return val;
                    } else if (val.first_name.toLowerCase().includes(searchData.toLowerCase())) {
                        return val;
                    }
                }).map((item, i) => {
                    return (
                        <p key={i}>{item.first_name}</p>
                    )
                })
            }
        </div>
    )
}

export default SearchData;