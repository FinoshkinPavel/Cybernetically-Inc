import React, { memo } from "react";
import { MenuItem, Select } from "@mui/material";
import s from "./Selector.module.scss";

type SelectorPropsType = {
  pageCount?: number;
  setPageCount: (value: number) => void;
  itemsCount: Array<number>;
};

export const Selector: React.FC<SelectorPropsType> = memo(
  ({ pageCount, setPageCount, itemsCount }) => {
    return (
      <div className={s.selectorBlock}>
        <span>Show</span>
        <Select
          sx={{ height: 25 }}
          size={"small"}
          value={pageCount}
          onChange={(e) => {
            setPageCount(e.target.value as number);
          }}
        >
          <MenuItem value={itemsCount[0]}>{itemsCount[0]}</MenuItem>
          <MenuItem value={itemsCount[1]}>{itemsCount[1]}</MenuItem>
          <MenuItem value={itemsCount[2]}>{itemsCount[2]}</MenuItem>
        </Select>
        <span>Cards per Page</span>
      </div>
    );
  }
);
