import type { AppProps } from "next/app";
import "@/styles/styles.scss";
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;

{
  /* <GoogleReCaptchaProvider
reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY}
scriptProps={{
  async: false, // optional, default to false,
  defer: true, // optional, default to false
  appendTo: "body", // optional, default to "head", can be "head" or "body",
  nonce: undefined,
}}>
<Component {...pageProps} />;
</GoogleReCaptchaProvider> */
}
