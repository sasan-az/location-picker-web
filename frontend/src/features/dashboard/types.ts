export enum LocationType {
  HOME = "home",
  BUSINESS = "business",
}

export type Location = {
  id: number;

  name: string;

  logo: string | File | null;

  locationType: LocationType;

  latitude: string;

  longitude: string;
};

export class LatLng {
  latitude: number = 0;
  longitude: number = 0;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
