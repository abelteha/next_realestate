export type filteredProperty = {
  purpose: string;
  rentFrequency: string;
  categoryExternalID: string;
  minPrice: string;
  maxPrice: string;
  areaMax: string;
  roomsMin: string;
  bathsMin: string;
  sort: string;
  locationExternalIDs: string;
  furnishingStatus: string;
};

export type property = {
  coverPhoto: any;
  price: number;
  rentFrequency: string;
  rooms: string;
  title: string;
  baths: string;
  area: number;
  agency: any;
  isVerified: boolean;
  externalID: string;
};
