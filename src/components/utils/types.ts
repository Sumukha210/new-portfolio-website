export interface responseTypes {
  status: "Success" | "Failed";
  message: string;
}

export interface ArticleTypes {
  id: number;
  title: string;
  cover_image: null | string;
  description: string;
  url: string;
}
