export enum BLOCK {
  Heading = "header",
  Paragraph = "paragraph",
}

export type ParagraphType = {
  data: {
    text: string;
  };
  type: BLOCK.Paragraph;
};

export type HeadingType = {
  data: {
    text: string;
    level: number;
  };
  type: BLOCK.Heading;
};

export type BlockType = ParagraphType | HeadingType;

export interface IAuthor {
  id: number;
  name: string;
  username: string;
  description: string;
}

export interface IPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: IAuthor;
  published_at: string;
  updated_at: string;
  image: string;
  comments_count: number;
  claps_count: number;
  claps_users_count: number;
  views: number;
  content: {
    time: number;
    blocks: BlockType[];
    version: string;
  };
  related_items: number[];
  url: string;
  meta_title: string;
  meta_description: string;
}

export interface IComment {
  id: number;
  content: string;
  replies_count: number;
  likes_count: number;
  username: string;
  user_id: number;
  user_likes: number;
  user_avatar: string;
  date_and_time: string;
  user_avatar_origin: string;
  user_url: string;
  level: number;
  created_at: string;
  updated_at: string;
  can_like_it: boolean;
  can_report_it: boolean;
  can_edit: boolean;
  can_delete: boolean;
  show_as_dark: boolean;
  author_role: string;
  show_author_role: boolean;
  show_the_badge: boolean;
  replies: IComment[];
}
