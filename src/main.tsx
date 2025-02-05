import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      window.location.reload(); // Сбрасываем состояние приложения
    }}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
