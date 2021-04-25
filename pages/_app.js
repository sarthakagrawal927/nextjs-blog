import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";

export function reportWebVitals(metric) {
  console.log(metric);
}
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
