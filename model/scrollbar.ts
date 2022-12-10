export type photos = { id: number; url: string }[];
export type propertyDetails = {
  price: number;
  rentFrequency: string | null;
  rooms: number;
  title: string;
  baths: number;
  area: number;
  agency: any;
  isVerified: boolean;
  description: string;
  type: string;
  purpose: string;
  furnishingStatus: string | null;
  amenities: any;
  photos: photos;
};
