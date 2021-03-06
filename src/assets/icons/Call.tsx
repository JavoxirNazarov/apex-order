import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CallIcon(props: SvgProps) {
  return (
    <Svg width={17} height={17} viewBox="0 0 17 17" fill="none">
      <Path
        d="M13.742 10.522c-.571-.123-1.023.143-1.423.374-.41.239-1.188.87-1.635.709C8.4 10.664 6.25 8.663 5.32 6.369c-.164-.456.465-1.24.701-1.655.23-.4.49-.857.371-1.432-.107-.517-1.49-2.278-1.98-2.76-.323-.317-.653-.492-.993-.52C2.142-.054.717 1.648.467 2.056c-.626.868-.623 2.024.01 3.425 1.527 3.764 7.298 9.445 11.077 11.029.697.326 1.335.489 1.907.489.56 0 1.06-.156 1.489-.466.323-.187 2.096-1.683 2.05-2.993-.029-.334-.203-.668-.517-.992-.479-.494-2.228-1.919-2.741-2.027z"
        fill="#1E1B26"
        {...props}
      />
    </Svg>
  );
}

export default CallIcon;
