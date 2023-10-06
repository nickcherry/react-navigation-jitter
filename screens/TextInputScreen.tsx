import { FC, memo } from 'react';
import { TextInput, View } from 'react-native';

const TextInputScreen: FC = memo(() => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <TextInput
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
