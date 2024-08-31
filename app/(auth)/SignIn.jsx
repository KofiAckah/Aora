import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSumbitting, setIsSubmitting] = useState(false);
  const sumbitForm = () => {
    alert("Form sent");
  };
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="w-full justify-center  h-full px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">
            Sign in to <Text className="text-secondary-200">Aora</Text>
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            // keyboardType="password-address"
          />

          <CustomButton
            title="Log In"
            handlePress={sumbitForm}
            containerStyles="mt-7"
            isLoading={isSumbitting}
          />
          <Text>Don't have an account Signp</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
