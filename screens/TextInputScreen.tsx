import { FC, memo } from 'react';
import { Text, TextInput, View } from 'react-native';

const TextInputScreen: FC = memo(() => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ marginBottom: 24 }}>
        <Text style={{ fontWeight: 'bold' }}>Issue #1:</Text>
        {'\n'}When this screen is pushed onto the stack and the `TextInput`
        component has `autoFocus` set to `true`, the software keyboard will
        sometimes appear over the previous screen, then disappear before
        animating in with the current screen.
      </Text>
      <Text style={{ marginBottom: 24 }}>
        <Text style={{ fontWeight: 'bold' }}>Issue #2:</Text>
        {'\n'}When this screen is popped from the stack and the software
        keyboard is presented (e.g. when the `TextInput` is focused), the
        software keyboard will flash and the animation will jitter.
      </Text>
      <TextInput
        autoFocus
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          padding: 4,
          width: '100%',
        }}
      />
    </View>
  );
});

export { TextInputScreen };
