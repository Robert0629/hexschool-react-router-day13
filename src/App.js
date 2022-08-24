import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";

const Todo = () => {
  return (
    <p>
      這是 Todo 頁面
      <Logout />
    </p>
  );
};
const Logout = () => {
  //2 useNavigate
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/login");
      }}
    >登出</button>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
// 3 React Router 動態路由
const Post = () => {
  return (
    <div>
      <h2>這是Post 頁面</h2>
      <NavLink to="/post/post123">
           <p>Post 詳細頁面</p>
          </NavLink>
      <Outlet />
    </div>
  );
};

const PostId = () => {
  let  params = useParams();
  return <p>PostId: {params.postId}</p>;
};

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
           <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </BrowserRouter>
    </div>
  );
}

export default App;
