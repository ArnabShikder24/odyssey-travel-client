import DashLayout from "@/components/DashLayout";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl">This is DashBoard</h1>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <DashLayout>{page}</DashLayout>;
};