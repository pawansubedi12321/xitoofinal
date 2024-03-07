// import { Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import UsersPage from "../pages/UsersPage";
// import ServicesPage from "../pages/ServicesPage";
// import LandingPage from "../pages/LandingPage";
// import AboutPage from "../pages/AboutPage";


// const privateRoutes = (
//   <>
//     <Route path="/" element={<MainLayout></MainLayout>}>
//       <Route index element={<LandingPage></LandingPage>} />
//       <Route path="/users" element={<UsersPage></UsersPage>} />
//       <Route path="/service" element={<ServicesPage></ServicesPage>} />
//       <Route path="/about" element={<AboutPage></AboutPage>} />
//     </Route>
//   </>
// );

// export default privateRoutes;
import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import ServicesPage from "../pages/ServicesPage";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";


const privateRoutes = (
  <>
    <Route path="/" element={<MainLayout></MainLayout>}>
      <Route index element={<LandingPage></LandingPage>} />
      <Route path="/users" element={<UsersPage></UsersPage>} />
      <Route path="/service" element={<ServicesPage></ServicesPage>} />
      <Route path="/about" element={<AboutPage></AboutPage>} />
    </Route>
  </>
);

export default privateRoutes;
