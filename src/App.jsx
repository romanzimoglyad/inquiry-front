import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Introduction from "./pages/Introduction";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="introduction" />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="resources" element={<Resources />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
