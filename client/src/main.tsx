import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { installLinkAttribution } from "./lib/link-attribution";

// Before render: the landing URL's attribution params must be captured while
// they are still on the URL (NotFound redirects to "/" on mount).
installLinkAttribution();

createRoot(document.getElementById("root")!).render(<App />);
