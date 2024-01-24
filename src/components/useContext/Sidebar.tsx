import { useUserContext } from "./context";

type Props = {};

const Sidebar = (props: Props) => {
  const user = useUserContext();
  return (
    <div>
      {user?.name}
      <div>Is Subscribed: {`${user.isSubscribed}`}</div>
    </div>
  );
};

export default Sidebar;
