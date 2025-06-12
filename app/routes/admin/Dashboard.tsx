import { Header } from "../../../components/Index";

const Dashboard = () => {
  const user = { name: "Ahmed" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />
      Dashboard Page Contents
    </main>
  );
};

export default Dashboard;
