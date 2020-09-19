const app = new Framework7({
  root: "#app", // App root element
  id: "io.framework7.testapp", // App bundle ID
  name: "Framework7", // App name
  theme: "auto", // Automatic theme detection
  autoDarkTheme: true,
  // App routes
  routes: [
    {
      path: "/",
      componentUrl: "./pages/home.html"
    },
    {
      path: "/about/",
      componentUrl: "./pages/about.html"
    },
    {
      path: "(.*)",
      componentUrl: "./pages/404.html"
    }
  ]
});
