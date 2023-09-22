import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IUser from "../../../types/User";

type IUserWithoutPassword = Omit<IUser, "password">;

interface UserState {
  userInfo: IUserWithoutPassword | null;
  userToken: string | null;
}

const initialUserInfo = localStorage.getItem("userInfo");

const initialState: UserState = {
  userInfo: initialUserInfo
    ? (JSON.parse(initialUserInfo) as IUserWithoutPassword)
    : null,
  userToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserWithoutPassword>) {
      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      state.userInfo = {
        ...action.payload,
        created_at:
          action.payload.created_at instanceof Date
            ? action.payload.created_at.toISOString()
            : action.payload.created_at,
      };
    },
    clearUser(state) {
      localStorage.removeItem("userInfo");

      state.userInfo = null;
      state.userToken = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
