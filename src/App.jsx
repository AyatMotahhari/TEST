import DashboardLayout from "./dashboard/DashboardLayout";
import DailyReports from "./dashboard/pages/DailyReports";

function App() {
  return (
    <DashboardLayout>
      <DailyReports />
    </DashboardLayout>
  );
}

export default App;