import cx from "classnames";

import styles from "./PlayingIcon.module.css";

export function PlayingIcon() {
  return (
    <div className="inline-flex items-end h-[30px] xl:h-[40px]">
      <div className={cx(styles.a, "w-[10px] bg-current mx-[1px]")} />
      <div className={cx(styles.b, "w-[10px] bg-current mx-[1px]")} />
      <div className={cx(styles.c, "w-[10px] bg-current mx-[1px]")} />
      <div className={cx(styles.d, "w-[10px] bg-current mx-[1px]")} />
    </div>
  );
}
