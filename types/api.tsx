export interface MetaData {
    meta_title: string;
    meta_description: string;
    canonical_url: string;
}

export interface Banner {
    banner_image_url: string;
}

export interface TokenResponse {
    access_token: string;
}

export interface HomeIntroProps {
    introduction_caption: string;
    introduction_description: string;
    introduction_image_url: string;
    introduction_video_url: string;
}

export interface HomeSliderProps {
    slider_caption: string;
    slider_image_url: string;
}

export interface AmenitiesGalleryProps {
    caption: string;
    image_url: string;
}

export interface HomeAmenitiesProps {
    amenity_caption: string;
    amenity_icon_url: string;
    gallery: AmenitiesGalleryProps[]
}

export interface HomeGalleryProps {
    gallery_caption: string;
    gallery_image_url: string;
}

export interface HomeLandmarkProps {
    landmark_caption: string;
    landmark_icon_url: string;
    landmark_distance: string;
}

export interface HomePortfolioProps {
    portfolio_caption: string;
    portfolio_image_url: string;
    portfolio_city_name: string;
    portfolio_description: string;
}

export interface AboutPanchshilProps {
    introduction_title: string;
    introduction_description: string;
}