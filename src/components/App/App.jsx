import UserRoutes from 'components/App/UserRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from 'components/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <UserRoutes />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;
