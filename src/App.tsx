
import { useContext } from "react";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Job } from "./components/Job";
import { JobsContext } from "./context/JobsContext";
import { JobsProvider } from "./context/JobsProvider";
import data from './data/data.json'


function App(): JSX.Element {

  return (
    <JobsProvider>
      <Header />
      <div className="px-4"  >
        <Filter />
      </div>
      <>
        {
          data.map((data) => {
            return (
              <div className=" px-4" key={data.id}>
                <Job
                  uID={data.id}
                  company={data.company}
                  isNew={data.new}
                  isFeatured={data.featured}
                  position={data.position}
                  role={data.role}
                  level={data.level}
                  postedTime={data.postedAt}
                  contract={data.contract}
                  location={data.location}
                  lang={data.languages}
                  tools={data.tools}
                />
              </div>
            )
          })
        }
      </>
    </JobsProvider>
  );
}

export default App;
