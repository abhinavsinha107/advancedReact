import Profile from "./Profile";
import Sidebar from "./Sidebar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Profile />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
