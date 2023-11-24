import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#755139FF", marginBottom: "20px" }} >
      <div style={{ color: "#fff", marginLeft: "10px" }} >
        <h1>CRUD Operations</h1>
      </div>
      <div style={{ display: "flex", gap: "10px", marginRight: "10px" }} >
        <Button variant="contained" style={{ background: "#FCF951FF", color: "#422057FF" }}
          onClick={() => navigate('/')}>Counter/todo</Button>

        <Button variant="contained" style={{ background: "#fc8751", color: "#422057FF" }}
          onClick={() => navigate('/users')}>Users List</Button>

        <Button variant="contained" style={{ background: "#fc8751", color: "#422057FF" }}
          onClick={() => navigate('/pets')}>Pets</Button>

        <Button variant="contained" style={{ background: "#FCF951FF", color: "#422057FF" }}
          onClick={() => navigate('/todo-crud')}>Todo-Crud</Button>
      </div>
    </div>
  )
}

export default Navbar