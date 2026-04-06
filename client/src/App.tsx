import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";

function AppRouter() {
  const normalize = (p: string) => {
    const s = (p || "/").toString();
    const trimmed = s.replace(/^\/+/, "").replace(/\/+$/, "");
    return trimmed ? `/${trimmed}` : "/";
  };

  const base = normalize(import.meta.env.BASE_URL);

  return (
    <WouterRouter base={base}>
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
    <TooltipProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
        <Toaster />
      </ThemeProvider>
    </TooltipProvider>
  );
}

export default App;
