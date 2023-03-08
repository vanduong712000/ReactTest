import React from 'react';
import ReactDOM from "react-dom";
// @function  UserContext
const UserContext = React.createContext({ name: '', auth: false });

// @function  UserProvider
// Create function to provide UserContext
const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({ name: '', auth: false });

  const loginContext = (email , token) => {
    setUser((user) => ({
      email: email,
      auth: true,
    }));
    localStorage.setItem("token" , token);
    localStorage.setItem("email" , email);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser((user) => ({
      email: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// @function  UnauthApp
function UnauthApp() {
  const { login } = React.useContext(UserContext);
  const [name, setName] = React.useState();

  return (
    <>
      <h1>Please, log in!</h1>

      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={() => login(name)}>Log in</button>
    </>
  );
}

// @function  AuthApp
function AuthApp() {
  const { user, logout } = React.useContext(UserContext);

  return (
    <>
      <h1>Hello, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

// @function  App
function App() {
  const { user } = React.useContext(UserContext);
  
  return user.auth ? <AuthApp /> : <UnauthApp />;
}

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);
export {UserContext ,UserProvider};