import { useState, MouseEventHandler, useRef } from "react";
import useFetchAllItems from "../hooks/fetch/useFetchAllItems";
import useFetchItemById from "../hooks/fetch/useFetchItemById";
import Navbar from "../components/Navbar";
import useAppDispatch from "../hooks/redux/useAppDispatch";
import { clearUser, setUser } from "../services/redux/auth/authSlice";
import useAppSelector from "src/hooks/redux/useAppSelector";
import { Role } from "src/types/User";

const Home = () => {
  const [itemId, setItemId] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.userInfo);

  const { data: items, error: itemsError, refetch } = useFetchAllItems();
  const { data: item, error: itemError } = useFetchItemById(
    itemId ? itemId : -1
  );

  const handleSearchClicked: MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    setItemId((prevId) => {
      if (!inputRef.current || !inputRef.current.value) {
        if (prevId) return prevId;
        return -1;
      }
      return Number(inputRef.current.value);
    });
  };

  const handleLoginClicked: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(
      setUser({
        id: `1`,
        username: "Ruge",
        role: Role.ADMIN,
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
      })
    );
  };

  const handleLogoutClicked: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(clearUser());
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-5 w-full h-screen justify-center items-center bg-purple-100 text-4xl">
        Welcome to YoMart!
        <input
          type="number"
          ref={inputRef}
          className="border border-blue-400 outline-none"
        />
        <button
          className="py-2 px-3 bg-purple-700 rounded-md text-white"
          onClick={handleSearchClicked}
        >
          Search
        </button>
        <span>
          {items ? items.map((item) => item.name) : itemsError?.message}
        </span>
        <button
          className="py-2 px-3 bg-purple-700 rounded-md text-white"
          onClick={() => refetch()}
        >
          Refetch
        </button>
        <h1>{item?.name}</h1>
        {user ? (
          <button
            className="py-2 px-3 bg-purple-700 rounded-md text-white"
            onClick={handleLogoutClicked}
          >
            Logout
          </button>
        ) : (
          <button
            className="py-2 px-3 bg-purple-700 rounded-md text-white"
            onClick={handleLoginClicked}
          >
            Login
          </button>
        )}
      </main>
    </>
  );
};

export default Home;
