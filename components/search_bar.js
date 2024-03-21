import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    return (
        <>
            <div className="mx-auto -mt-6 rounded-md bg-gray-100 drop-shadow-xl max-w-fit text-black py-1 px-1 flex">
                <div id="search-boxes" className="">
                    <form action="" className={"flex flex-row"}>
                        <input type="text" name="city" id="" placeholder={"Where are you going"}
                               className="p-2 focus:outline-none mr-1 rounded-md drop-shadow-sm"/>
                        <input type={"date"} name={"startDate"} className="p-2 focus:outline-none mr-1 rounded-md drop-shadow-sm "/>
                        <input type={"date"} name={"endDate"} className="p-2 focus:outline-none mr-1 rounded-md drop-shadow-sm"/>
                        <button type={"submit"} className={"flex flex-row align-middle justify-center items-center mr-2"}>
                            <FontAwesomeIcon className=" px-2 py-2 text-black" icon={faSearch}/>
                            Search
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}