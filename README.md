# React Navigation Jitter on Pop When Software Keyboard is Present

## Issue #1
When this screen is pushed onto the stack and the `TextInput` component has `autoFocus` set to `true`, the software keyboard will sometimes appear over the previous screen, then disappear before animating in with the current screen.

## Issue #2
When this screen is popped from the stack and the software keyboard is presented (e.g. when the `TextInput` is focused), the software keyboard will flash and the animation will jitter.

https://github.com/nickcherry/react-navigation-jitter/assets/229477/4aa418b8-9592-4511-9d59-a101c9936e6f

