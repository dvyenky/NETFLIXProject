import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/FireBaseLogin";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, AVATAR } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {})
      .catch((err) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-b from-black absolute w-full z-30">
      {/* Logo */}
      <img className="w-36 md:w-44" src={LOGO} alt="Netflix Logo" />

      {/* User Section */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-md object-cover cursor-pointer"
            alt="user profile"
            src={AVATAR}
          />

          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
