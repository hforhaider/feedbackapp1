import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function Post() {
  const Status = 150;

  const navigate = useNavigate();

  const onClick = () => {
    console.log("hello");
    return navigate("/about");
  };

  if (Status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <div>
      <h1>POST</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>HEY THERE</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
