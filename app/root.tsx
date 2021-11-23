import { LiveReload, Outlet, Links } from "remix";
import type { LinksFunction } from "remix";
import appStyles from "./styles/app.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: appStyles }];
};
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
