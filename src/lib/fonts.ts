import { Bricolage_Grotesque } from "next/font/google";
import { GeistSans } from "geist/font/sans";

export const fontSans = GeistSans;

export const fontHeading = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-heading",
});
