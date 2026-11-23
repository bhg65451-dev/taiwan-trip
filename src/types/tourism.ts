export type Region = "北部" | "中部" | "南部" | "東部" | "離島";

export type Theme =
  | "自然奇景"
  | "夜市美食"
  | "文化古蹟"
  | "溫泉秘境"
  | "鐵道慢旅";

export interface Destination {
  slug: string;
  name: string;
  englishName: string;
  city: string;
  district: string;
  region: Region;
  themes: Theme[];
  tags: string[];
  rating: number;
  season: string;
  duration: string;
  description: string;
  transport: {
    hsr: string;
    rail: string;
    bus: string;
  };
  foods: string[];
  image: string;
}

export interface Food {
  name: string;
  origin: string;
  flavor: string;
  emoji: string;
}

export interface NightMarket {
  name: string;
  city: string;
  mustEat: string;
  transport: string;
}
