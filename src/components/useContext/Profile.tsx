import {useUserContext} from "./context";

type Props = {};

const Profile = (props: Props) => {
    const user = useUserContext()
  return <div>{user.name}</div>;
};

export default Profile;
