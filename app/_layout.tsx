import { View } from "react-native";
import { Slot, usePathname } from "expo-router";
import React from "react";
import FooterNav from "@/components/FooterNav";
import { SafeAreaView } from "react-native-safe-area-context";

const user = {}

const RootLayout = () => {
  const pathname = usePathname();
  const hideFooter = ["/signup", "/login"].includes(pathname);

  return (
    <SafeAreaView style={{ flex: 1, width: "100%", backgroundColor: "#ecf0f1" }}>
      <Slot />

      {hideFooter ? null : <FooterNav />}
    </SafeAreaView>
  );
};

export default RootLayout;
