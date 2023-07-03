
interface ArticleInterface<B, C> {
  title: string,
  isLock: B,
  comments: C[]
}


type CommentType = {
  content: string,
  author: string
}

const hd: ArticleInterface<boolean, CommentType> = {
  title: '文章标题111',
  isLock: true,
  comments: [{content: '评论1', author: 'chen'}, {content: '评论2', author: 'chen2'}]
}