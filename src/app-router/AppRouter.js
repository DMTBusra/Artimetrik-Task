
import Main from '../pages/Main'
import Detail from '../pages/Detail'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppRouter = () => {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<Detail />} />
        
      </Routes>
    </Router>
  );
}

export default AppRouter