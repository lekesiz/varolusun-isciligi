import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter, useLocation } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";

function AppRouter() {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

  const useBaseLocation = () => {
    const [location, navigate] = useLocation();

    const strippedLocation =
      base && location.startsWith(base) ? location.slice(base.length) || "/" : location;

    const baseNavigate = (to: string, ...args: any[]) => navigate(base + to, ...args);

    return [strippedLocation, baseNavigate] as const;
  };

  return (
    <WouterRouter hook={useBaseLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
