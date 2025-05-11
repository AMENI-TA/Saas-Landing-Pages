import { useNavigate } from 'react-router-dom';

export default function FreeTrial() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to free trial</h2>
      <button onClick={() => navigate("/principalPage")}>
        <b>Return to the principal page</b>
      </button>
    </div>
  );
}