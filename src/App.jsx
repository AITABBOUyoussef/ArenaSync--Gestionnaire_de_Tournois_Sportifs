import StatusBadge from './components/StatusBadge';

function App() {
  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">ARENASYNC - Test Badges</h1>
      <StatusBadge status="On Going" />
      <StatusBadge status="Upcoming" />
      <StatusBadge status="Pending" />
    </div>
  );
}

export default App;