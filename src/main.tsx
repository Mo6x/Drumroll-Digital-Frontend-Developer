import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeDashboards } from "./Components/HomeComponets/HomeDashboards/HomeHomeDashboards";
import queryClient from "./queryClient.ts"; 
import App from "./App.tsx";
import "./index.css";


document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) { const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/"element={<App />} />
              <Route path="/HomeDashboards"element={<HomeDashboards />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </React.StrictMode>
    );
  } else {
    console.error('Root element not found');
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
