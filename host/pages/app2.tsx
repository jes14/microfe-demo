import dynamic from "next/dynamic";

const RemoteApp2 = dynamic(() => import("../../app2/components/app2"), {
  ssr: false,
});

const App1 = () => <RemoteApp2 />;

export default App1;
