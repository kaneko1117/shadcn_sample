import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex space-x-4">
      <Button variant="ghost">TEXT</Button>
      <Button className="rounded-[30px]">CONTAINED</Button>
      <Button variant="outline" className="hover:bg-sky-200">
        OUTLINE
      </Button>
    </div>
  );
}

export default App;
