import { useEffect, useMemo, useState } from "react";

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
    return ("/" + s.replace(/^\/+/, "").replace(/\/+$/, "")).replace(/\/+$/, "");
  };

  const base = useMemo(() => normalize(import.meta.env.BASE_URL), []);

  const useBaseLocation = () => {
    const [location, setLocation] = useState(() => {
      const full = normalize(window.location.pathname);
      if (!full.startsWith(base)) return "/";
      return normalize(full.slice(base.length) || "/");
    });

    useEffect(() => {
      const onPopState = () => {
        const full = normalize(window.location.pathname);
        if (!full.startsWith(base)) return;
        setLocation(normalize(full.slice(base.length) || "/"));
      };

      window.addEventListener("popstate", onPopState);
      return () => window.removeEventListener("popstate", onPopState);
    }, [base]);

    const navigate = (to: string, options?: { replace?: boolean }) => {
      const target = base + normalize(to);
      if (options?.replace) window.history.replaceState({}, "", target);
      else window.history.pushState({}, "", target);
      window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
    };

    return [location, navigate] as [string, typeof navigate];
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
