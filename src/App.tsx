import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
