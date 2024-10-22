export interface ResasType {
  prefectures: Prefecture[];
  selectedLists: Population[];
}

export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface PopByYear {
  year: number;
  value: number;
}

export interface PopByAge {
  data: PopByYear[];
  label: string;
}

export interface Population {
  data: PopByAge[];
  prefCode: number;
}
