export interface Image {
  small?: ImageData;
  thumbnail?: ImageData;
  reference_id?: number;
  file_name?: string;
  created_at?: Date;
  medium?: ImageData;
  title: string;
  deleted_at?: Date;
  file_size?: number;
  sizes: ImageSizes;
  updated_at?: Date;
  file_hash?: string;
  mime_type?: string;
  user_id?: number;
  id: number;
  full?: ImageData;
}

interface ImageData {
  width: number;
  url: string;
  height: number;
}

interface ImageSizes {
  small: ImageData;
  thumbnail: ImageData;
  medium: ImageData;
  full: ImageData;
}
