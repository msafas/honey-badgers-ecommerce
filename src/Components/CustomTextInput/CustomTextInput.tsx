import React, { useState } from 'react';
import { View, StyleSheet, TextInput as RNTextInput } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";


interface CustomTextInputProps {
  label: string | JSX.Element;
  value: string;
  onChangeText: (text: string) => void;
  keybordType: any,
  disabled: boolean
  iconName: string;
  securetextEntry: boolean
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ label, value, onChangeText, keybordType, disabled, iconName, securetextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme() as any;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={{ zIndex: 0, }}>


      <TextInput
        placeholder={label}
        value={value}

        onBlur={handleBlur}
        onChangeText={onChangeText}
        placeholderTextColor={theme.colors.placeholder}
        onFocus={handleFocus}
        mode="outlined"

        outlineColor={theme.colors.borderGray}
        keyboardType={keybordType}
        disabled={disabled}
        secureTextEntry={securetextEntry}

        left={

          <TextInput.Icon
            icon={() =>
              <AntDesign
                name={iconName}
                size={20}
                color={theme.colors.placeholder}
                style={{

                }}
              />
            }

          />
        }


        style={{ marginVertical: 10, height: 55, backgroundColor: "white", zIndex: 0, }}

      />
    </View>
  );
};

export default CustomTextInput;
