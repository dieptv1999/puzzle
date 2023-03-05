"use client";
import {RowModel} from "@/model/row";
import RowWords from "@/components/row";
import {useEffect, useState} from "react";

const cellWidth = 48 + 2;

export function Crosswords({
                             rows
                           }: {
  rows: RowModel[]
}) {
  const [config, setConfig] = useState({
    left: 0,
    right: 0,
    center: 0,
  });
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    calculateWidth();
  }, [])

  function calculateWidth() {
    let maxLeft = 0, maxRight = 0;
    rows.forEach(row => {
      if (row.positionResult > maxLeft) maxLeft = row.positionResult;
      if (row.words.length - row.positionResult > maxRight) maxRight = row.words.length - row.positionResult;
    })

    setConfig({
      left: maxLeft,
      center: maxLeft,
      right: maxRight,
    })
    setTimeout(() => {
      setSplash(false);
    }, 500);
  }

  function paddingLeftRow(keyIndex: number) {
    return config.left - keyIndex;
  }

  return (
    <div className={`${splash ? 'invisible' : 'flex'} flex-col w-full`}>
      {rows?.map(row => {
        return (<div className={``}
                     style={{
                       marginLeft: paddingLeftRow(row.positionResult) * cellWidth
                     }}
        >

          <RowWords row={row}/>
        </div>)
      })}
    </div>
  )
}