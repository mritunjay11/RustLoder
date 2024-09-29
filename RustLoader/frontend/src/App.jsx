import React from "react";
import NavBar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Vehicles from "./components/Vehicles/vehicles";
import FAQs from "./components/FAQ/faq";
import AuthPage from "./components/AuthPage/AuthPage";
import OwnerPage from "./components/Owners/owner";
import CheckOutPage from "./components/CheckOutPage/CheckOut";
import Dashboard from "./components/Dashboard/Dashboard";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "/contact",
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
    },
    {
      path: "/vehicles",
      element: (
        <Layout>
          <Vehicles />
        </Layout>
      ),
    },
    {
      path: "/faqs",
      element: (
        <Layout>
          <FAQs />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <AuthPage />
        </Layout>
      ),
    },
    {
      path: "/owners",
      element: (
        <Layout>
          <OwnerPage />
        </Layout>
      ),
    },
    {
      path: "/checkout",
      element: (
        <Layout>
          <CheckOutPage />
        </Layout>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
