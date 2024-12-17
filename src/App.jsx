import { useState, lazy, Suspense, useCallback, useMemo } from "react";
import Loading from "./components/Dashboard/Loading";

const Sidebar = lazy(() => import("./components/Dashboard/Sidebar"));
const Header = lazy(() => import("./components/Dashboard/Header"));
const Main = lazy(() => import("./components/Dashboard/Main"));

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prevState) => !prevState);
  }, []);

  const MemoizedSidebar = useMemo(() => {
    return (
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleSidebar={toggleSidebar}
      />
    );
  }, [isSidebarOpen, activeTab, toggleSidebar]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex h-screen bg-[#191c24]">
        {isSidebarOpen && (
          <div className="fixed inset-0 z-10" onClick={toggleSidebar}></div>
        )}
        {MemoizedSidebar}
        <div className="flex flex-col flex-1">
          <div className="sticky top-0 z-20">
            <Header toggleSidebar={toggleSidebar} />
          </div>
          <div className="flex-1 overflow-y-auto">
            <Main activeTab={activeTab} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
