import { View } from "react-native";
import { Slot, usePathname } from "expo-router";
import React from "react";
import FooterNav from "@/components/FooterNav";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";
import "./../global.css"

const user = {}

const RootLayout = () => {
  const pathname = usePathname();
  const hideFooter = ["/signup", "/login"].includes(pathname);

  return (
    <AuthProvider>
    <SafeAreaView style={{ flex: 1, width: "100%", backgroundColor: "#ecf0f1" }}>
      <Slot />

      {hideFooter ? null : <FooterNav />}
    </SafeAreaView>
    </AuthProvider>
  );
};

export default RootLayout;
