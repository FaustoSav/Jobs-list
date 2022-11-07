import { useContext } from "react";
import { TbX } from "react-icons/tb";
import { JobsContext } from "../context/JobsContext";
import { JobsProvider } from "../context/JobsProvider";

interface setProps {
  text: string;
}

export const FilterRequirement = ({ text }: setProps) => {


    const {deleteFilter} = useContext(JobsContext);
    
  return (
      <div className='filter-requirement' >
        <p className="pr-2 py-1">{text}</p>

        <div className="flag-delete" >
          <TbX className="delete-requirement" onClick={deleteFilter}/>
        </div>
      </div>

  )
}
