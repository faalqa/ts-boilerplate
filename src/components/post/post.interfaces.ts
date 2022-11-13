export interface ICreatePost {
    userId: string,
    content: string,
}
export interface IPost {
    id: number,
    userId: string,
    content: string,
    created_at: string,
}

export interface IPostSerialized {
    id: number,
    userId: string,
    content: string,
    created_at: string,
}

/*
    CREATE TABLE IF NOT EXISTS "posts" (
  "id" SERIAL,
  "userId" *frn key*,
  "content" TEXT NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY("id")
);
*/