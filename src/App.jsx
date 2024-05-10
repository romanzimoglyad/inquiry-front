import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";
import Introduction from "./pages/Introduction";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Resources from "./pages/Resources";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SearchProvider } from "./context/SearchContext";
import Lesson from "./pages/Lesson";
import CreateLesson from "./pages/CreateLesson";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./ui/scroll";
import Login from "./pages/Login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <GlobalStyles />
      <SearchProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="introduction" />} />
              <Route path="introduction" element={<Introduction />} />
              <Route path="resources" element={<Resources />} />
              <Route path="lessons/:lessonId" element={<Lesson />} />
              <Route path="lessons/create" element={<CreateLesson />} />
              <Route
                path="lessons/create/:lessonId"
                element={<CreateLesson />}
              />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--collor-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
