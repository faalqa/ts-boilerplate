export interface ICreateArticle{
    title: string,
    content: Text,
}
export interface IArticle{
    id?: number,
    title: string,
    content: Text,
}
export interface IArticleSerialized {
    id: number,
    title: string,
    content: Text,
    created_at: string,
}