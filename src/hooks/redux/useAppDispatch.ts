import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/redux/store";

const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
