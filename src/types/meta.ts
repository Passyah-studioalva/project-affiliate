export type PropsMeta = {
    viewport?: string;
    title?: string;
    desc?: string;
    keywords?: string;
    url?: string;
    robots?: string;
    image?: any;
    twitterTitle?: string;
    twitterDesc?: string;
    twitterImg?: any;
  };
  
  export interface Meta {
    data: Data;
    meta?: Object;
  }
  
  export interface Data {
    id: number;
    Section2Title: string;
    Section3Title: string;
    Section4Title: string;
    Section5Title: string;
    Section6Title: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    seo: SEO;
  }
  
  export interface SEO {
    id: number;
    metaTitle: string;
    metaDescription: string;
    metaImage?: any;
    keywords: string;
    metaRobots: string;
    structuredData: null;
    metaViewport: string;
    canonicalURL: string;
    metaSocial: MetaSocial[];
  }
  
  export interface MetaSocial {
    id: number;
    socialNetwork: string;
    title: string;
    description: string;
    image: Image;
  }
  
  export interface Image {
    id: number;
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Formats {
    large: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
  }
  
  export interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
  }
  