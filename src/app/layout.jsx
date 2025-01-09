import { Open_Sans } from "next/font/google";
import "@/style/main.scss";
import "@/style/ui.scss";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "ONO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="wrapper">
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
