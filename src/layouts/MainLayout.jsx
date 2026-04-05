import Navbar from "../components/common/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="bg-background dark:bg-darkBg min-h-screen">
      <Navbar />
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
