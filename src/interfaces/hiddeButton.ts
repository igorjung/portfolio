import { MouseEventHandler } from "react";

export default interface HiddeButtonInterface {
  showMore: boolean,
  onShowMore: MouseEventHandler<HTMLButtonElement>,
}
