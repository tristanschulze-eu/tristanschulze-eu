interface Concert { 
  pinned?: boolean;
  image_src: string;
  title: string;
  url: string;
  start_date: Date;
  description: string;
}

interface Composition { 
  title: string;
  catgegory: string;
  instrumentation: string[];
  links: {name: string; url: string}[];
  description: string;
}

export type { Concert, Composition }
