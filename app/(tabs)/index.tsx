import CalendarComponent from "@/components/CardComponent";
import { SafeAreaView } from "react-native";

export default function Calendar() {
  return (
    <SafeAreaView
      style={{ height: "100%", width: "100%", backgroundColor: "white" }}
    >
      <CalendarComponent />
    </SafeAreaView>
  );
}
