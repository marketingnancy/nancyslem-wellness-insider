import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HomeJP from "./pages/HomeJP";
import HomeNL from "./pages/HomeNL";
import HomeDE from "./pages/HomeDE";
import HomeFR from "./pages/HomeFR";
import HomeSE from "./pages/HomeSE";
import HomeHU from "./pages/HomeHU";
import HomeIT from "./pages/HomeIT";
import HomeES from "./pages/HomeES";
import HomeDA from "./pages/HomeDA";
import HomeCS from "./pages/HomeCS";
import HomeNO from "./pages/HomeNO";
import HomeFI from "./pages/HomeFI";
import HomePL from "./pages/HomePL";
import HomeRO from "./pages/HomeRO";
import HomeGR from "./pages/HomeGR";
import HomePT from "./pages/HomePT";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/jp"} component={HomeJP} />
      <Route path={"/nl"} component={HomeNL} />
      <Route path={"/de"} component={HomeDE} />
      <Route path={"/fr"} component={HomeFR} />
      <Route path={"/se"} component={HomeSE} />
      <Route path={"/hu"} component={HomeHU} />
      <Route path={"/it"} component={HomeIT} />
      <Route path={"/es"} component={HomeES} />
      <Route path={"/da"} component={HomeDA} />
      <Route path={"/cs"} component={HomeCS} />
      <Route path={"/no"} component={HomeNO} />
      <Route path={"/fi"} component={HomeFI} />
      <Route path={"/pl"} component={HomePL} />
      <Route path={"/ro"} component={HomeRO} />
      <Route path={"/gr"} component={HomeGR} />
      <Route path={"/pt"} component={HomePT} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
