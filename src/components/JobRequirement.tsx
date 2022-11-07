import { useContext } from 'react';
import { JobsContext } from '../context/JobsContext'
interface IProps {
  requirementText: string;
}

export const Requirement = ({ requirementText }: IProps) => {

  const { handleRequirement} = useContext(JobsContext)

  return (
    <div
      className='requirement'
      onClick={handleRequirement} >
        {requirementText}
    </div>
  )
}
