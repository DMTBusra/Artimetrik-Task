
import './App.css';
import AppRouter from "./app-router/AppRouter"
import UserContextProvider from "./contexts/UserContext"
function App() {
  return (
    <div className="main">
      <UserContextProvider>
        <AppRouter />
      </UserContextProvider>
    </div>
  );
}

export default App;
