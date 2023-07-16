import "@/styles/globals.css";
import { BookingProvider } from "@/context/BookingContext";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <BookingProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookingProvider>
  );
}
