import {useMemo} from "react"
import { config } from "../../config.ts";
const useIconsColor = (color?: string) => {
  const fillColor = useMemo(() => color || config.primaryColor, [color]);
  return {
    fillColor,
  };
};
export default useIconsColor;