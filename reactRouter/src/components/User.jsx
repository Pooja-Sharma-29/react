import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return (
    <div className="text-3xl text-white text-center p-4 bg-gray-600">
      User: {userid}
    </div>
  );
};

export default User;
