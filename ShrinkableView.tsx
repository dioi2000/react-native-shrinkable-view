import {
  View,
  ViewStyle,
} from 'react-native';


/**
 * simple view with auto Shrink option
 * 
 * @param {number} width desired width of view
 * @param {number} height desired height of view
 * @param {number} minRatio minimum size ratio of view
 * @param {ViewStyle} style style of view
 * 
 * @returns {View} shrinkable sized view
 */
export type ShrinkableViewProps = {
  width?: number
  height?: number
  minRatio?: number
  style?: ViewStyle
}

const ShrinkableView = ({
  width = 0,
  height = 0,
  minRatio = 2,
  style,
  ...props
}: ShrinkableViewProps) => {
  const viewStyle = {
    maxWidth: width,
    minWidth: width / minRatio,
    maxHeight: height,
    minHeight: height / minRatio,
    flexGrow: 1,
  } as ViewStyle

  return (
    <View
      style={[viewStyle, style]}
      {...props}
    >
    </View>
  );
}

export default ShrinkableView;