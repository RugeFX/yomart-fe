import axios from "axios";
import useAppSelector from "src/hooks/redux/useAppSelector";

const TestUser = () => {
  const user = useAppSelector((state) => state.auth.userInfo);

  axios.get("http://localhost", { params: {} });
  return (
    <div>
      <h1 className="text-lg text-black">
        {typeof user?.created_at === "string" ? user.created_at : user?.created_at.toISOString()}
      </h1>
    </div>
  );
};

export default TestUser;
