import {Word} from "@/model/word";

export interface RowModel {
  positionResult: number;
  words: Word[];
  visible: boolean;
}