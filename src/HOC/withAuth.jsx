import { useContext } from "react";
import AuthContext from "../contexts/authContexts";

export default function withAuth(Component) {
  const EnchancedComponent = (props) => {
    const auth = useContext(AuthContext);

    return <Component {...props} {...auth} />;
  };

  return EnchancedComponent;
}
