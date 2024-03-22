import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    useEffect(() => {
        const getData = async () => {
            const query = await fetch('https://geocode.search.hereapi.com/v1/geocode?apikey=4oUa3HmqWXAm7PUNFPImB356apeITHbSHbr0ApSs4sU&q=Delhi'); // Here API
            const response = await query.json();
            console.log("Response from API", response);
        }
        getData();
    }, []);

    return (
        <>
            <div className="mx-auto -mt-6 rounded-md bg-gray-200 drop-shadow-xl w-[55%] text-black py-1 px-1 flex">
                <form action="" className={"w-full grid grid-cols-9 justify-between"}>
                    <input type="text" name="city" id="" placeholder={"Where are you going"}
                           className="p-2 focus:outline-none mr-1 rounded-md drop-shadow-sm col-span-4" />
                    <input type={"date"} name={"startDate"} className="p-2 focus:outline-none mr-1 rounded-md drop-shadow-sm col-span-2" />
                    <input type={"date"} name={"endDate"} className="p-2 focus:outline-none mr-1 rounded-md drop-shadow-sm col-span-2" />
                    <button type={"submit"} className={"flex flex-row align-middle justify-center items-center bg-[#008DDA] p-1 pr-4 rounded-md text-white col-span-1"}>
                        <FontAwesomeIcon className=" px-2 py-2 text-white" icon={faSearch} />
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}

export default SearchBar;