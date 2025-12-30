import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Neha Gopal Thakur | Profile",
    template: "%s | Neha Gopal Thakur",
  },
  description:
    "Official profile of Neha Gopal Thakur.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
