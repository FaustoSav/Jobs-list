
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { JobsProvider } from './context/JobsProvider';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
  <JobsProvider>
    <App />
    </JobsProvider>
  //</React.StrictMode>
);

