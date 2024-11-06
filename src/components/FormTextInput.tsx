import {useController, useFormContext} from 'react-hook-form';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';

type FormTextInputProps = TextInputProps & {
  name: string;
  label: string;
  required?: boolean;
};
export const FormTextInput = ({name, label, required}: FormTextInputProps) => {
  const {control} = useFormContext();
  const {field} = useController({
    control,
    name,
    defaultValue: '',
    rules: {required: required},
  });
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        style={styles.textInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
});
