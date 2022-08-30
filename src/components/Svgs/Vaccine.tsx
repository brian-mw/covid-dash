import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgVaccine = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} fill="none" stroke="black" {...props}>
      <Path
        d="M8.187 20.385A1.308 1.308 0 017.255 20L4 16.745a1.318 1.318 0 010-1.864l8.662-8.663a.324.324 0 01.459 0l4.66 4.66a.324.324 0 010 .459l-8.663 8.662a1.308 1.308 0 01-.932.386zm4.706-13.48L4.46 15.339a.67.67 0 000 .948l3.253 3.255a.686.686 0 00.947 0l8.433-8.433-4.2-4.202z"
        fill="#000"
      />
      <Path
        d="M5.359 20.945a.878.878 0 01-.62-.256L3.31 19.262a.878.878 0 010-1.242l1.211-1.211a.334.334 0 01.459 0l2.21 2.21a.324.324 0 010 .458l-1.212 1.211a.875.875 0 01-.62.257zm-.607-3.449l-.982.982a.229.229 0 000 .325l1.427 1.427a.23.23 0 00.325 0l.982-.982-1.752-1.752zM18.146 12.025a.324.324 0 01-.23-.095L12.07 6.083a.324.324 0 010-.459l1.8-1.8a.324.324 0 01.458 0l5.847 5.848a.324.324 0 010 .458l-1.8 1.8a.324.324 0 01-.23.095zm-5.388-6.171l5.388 5.388L19.487 9.9l-5.388-5.388-1.341 1.34zM22.058 5.344a.324.324 0 01-.23-.095l-3.077-3.076a.324.324 0 010-.459l.968-.97a.324.324 0 01.458 0l3.078 3.077a.324.324 0 010 .459l-.969.969a.324.324 0 01-.228.095zm-2.619-3.402l2.619 2.619.51-.51-2.619-2.62-.51.511z"
        fill="#000"
      />
      <Path
        d="M17.747 8.026a.324.324 0 01-.23-.095L16.07 6.483a.324.324 0 010-.459l3.497-3.497a.324.324 0 01.458 0l1.449 1.449a.324.324 0 010 .458l-3.497 3.497a.324.324 0 01-.23.095zm-.99-1.773l.99.99 3.038-3.038-.99-.99-3.039 3.038zM.973 23.351a.324.324 0 01-.23-.553l3.282-3.281a.324.324 0 11.458.458l-3.28 3.281a.324.324 0 01-.23.095zM12.454 9.027a.324.324 0 01-.23-.095l-.907-.908a.324.324 0 01.458-.46l.908.909a.325.325 0 01-.23.554h.001zM10.553 10.461a.323.323 0 01-.23-.095l-.675-.674a.324.324 0 01.459-.459l.675.675a.325.325 0 01-.23.553zM9.117 12.362a.324.324 0 01-.229-.095l-.908-.908a.325.325 0 01.459-.459l.908.908a.324.324 0 01-.23.554zM5.782 15.697a.324.324 0 01-.23-.095l-.908-.908a.324.324 0 01.46-.456l.908.908a.325.325 0 01-.23.553v-.002zM7.217 13.797a.324.324 0 01-.23-.095l-.674-.675a.324.324 0 01.458-.458l.675.674a.324.324 0 01-.23.554z"
        fill="#000"
      />
    </Svg>
  );
};

export default SvgVaccine;
