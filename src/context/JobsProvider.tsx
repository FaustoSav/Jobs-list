
import React, { useEffect, useState } from "react";
import { JobsContext } from "./JobsContext"


interface Iprops {
  children: JSX.Element | JSX.Element[];
}

export const JobsProvider = ({ children }: Iprops) => {
  const [arrayFilter, setArrayFilter] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState<boolean>(false)
   
  const deleteFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.parentNode?.parentElement?.textContent) {
      const currentText = e.currentTarget.parentNode.parentElement.textContent
      let temporalArray = arrayFilter;
      let index = arrayFilter.indexOf(currentText.toString());
      if (index >= 0) {
        
        temporalArray = arrayFilter.filter(e => e !== currentText)
        setArrayFilter(temporalArray);
        if (arrayFilter.length === 1) {
          setIsVisible(false)
        }
      }
    }
  }

  const handleClear = () => {
    setArrayFilter([]);
    setIsVisible(false);
  }

  const handleRequirement = (e: React.MouseEvent<HTMLDivElement>) => {
    let text = e.currentTarget.textContent;

    if (text && !arrayFilter.includes(text)) {
      const actualizedArray = [text, ...arrayFilter];
      setArrayFilter(actualizedArray);
      setIsVisible(true);
    }
  }

  return (
    <JobsContext.Provider value={{
      handleRequirement,
      arrayFilter,
      handleClear,
      isVisible,
      deleteFilter,
    }}>
      {children}
    </JobsContext.Provider>
  )
}
