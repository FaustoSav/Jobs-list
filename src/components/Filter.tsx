
import { useContext } from "react"
import { JobsContext } from "../context/JobsContext"
import { FilterRequirement } from "./FilterRequirement"


export const Filter = () => {


  const { arrayFilter, handleClear, isVisible } = useContext(JobsContext)


  return (

    <div className={`filter ${isVisible ? 'visible' : ' invisible'} `} >

      <div className="w-full flex flex-wrap gap-2" id="filter-container" >


        {
          arrayFilter.map((req: string) => {
            return (<FilterRequirement text={req} key={req}  />)

          })
        }

      </div>

      <div className="clear-button "
        onClick={handleClear}>
        Clear
      </div>

    </div>
  )


}
