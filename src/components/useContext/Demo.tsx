import { useState } from "react";
import Dashboard from "./Dashboard";
import {DashboardContext} from "./context";

export interface User {
  isSubscribed: boolean;
  name: string;
}

type AppConfig = {
  theme: string;
  changeTheme: () => void;
};

const Demo = () => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "Abhinav",
  });

  return (
    <div>
        <DashboardContext.Provider value={user}>
          <Dashboard />

        </DashboardContext.Provider>
    </div>
  );
};

export default Demo;
