import * as React from "react";
import { Toast, Header} from "./components/index";
import "./App.css";
import TabMenu from "./components/Tab.tsx";

function App() {
  return (
    <div style={{ margin: "2rem" }}>
      {/* ヘッダー */}
      <Header />
      {/* トースト表示 */}
      <Toast />
      {/* Todo表示
      <Todo /> */}
      {/* タブ表示 */}
      <TabMenu />
    </div>
  );
}



export default App;
