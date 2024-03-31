import { Text, View } from "@/components/Themed";
import { resetNavigationStack } from "@/lib/resetNavigationStack";
import { TouchableOpacity } from "react-native";

export default function Createprofile() {
  return (
    <View className="mt-16">
      <Text>Create Profile</Text>
      <TouchableOpacity
        onPress={() => resetNavigationStack("/")}
        className="p-8 m-2 bg-grey-400"
      >
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
