
import { Requirement } from './JobRequirement';
import img from '../components/Images';
import IJob from '../interfaces/interfaces';
import { JobsContext } from '../context/JobsContext';
import { useContext } from 'react';


export const Job = ({ uID, company, isNew, isFeatured, position, role, level, postedTime, contract, location, lang, tools }: IJob) => {


  const tagsArray = [role, level, ...lang, ...tools]

  const { arrayFilter } = useContext(JobsContext)

  const found = arrayFilter.every((r: string) => tagsArray.includes(r))

  return (
    <>

      {arrayFilter.length && found === false
        ? null
        : (
          <div className={`job-component mt-20 ${isFeatured && 'border-l-4 border-desaturedCyan border-solid'} `} key={`${uID}`}>
            <div className="pb-3 relative sm:flex sm:items-center">

              <div className="absolute -translate-y-8 sm:relative sm:-translate-y-0 s" id="job-image">
                <img src={img[uID - 1].src} className='w-11 sm:w-20 sm:mr-6' alt="company-name" />
              </div>

              <div className="mt-6 sm:m-0 sm:py-2" id="job-position">
                <div className='flex'>

                  <h2 className=' text-cyan-500 text-sm font-bold mb-2 mr-4 sm:text-base'>{company}</h2>

                  {
                    isNew
                      ? <div className='new'>!NEW </div>
                      : null
                  }
                  {
                    isFeatured
                      ? <div className='featured'> FEATURED</div>
                      : null
                  }
                </div>
                <p className='position'>{position}</p>
                <div className="flex justify-start space-x-2  text-darkGray text-xs sm:text-sm ">

                  <div>{postedTime}</div>
                  <div>{contract} </div>
                  <div>{location}</div>

                </div>
              </div>
            </div>



            <div className="flex flex-wrap pt-3 gap-x-2 sm:justify-end " id="job-keywords">

              {tagsArray.map((tag: string) => { return (<Requirement requirementText={tag} />) })}

            </div>
          </div>
        )}
    </>

  )
}
