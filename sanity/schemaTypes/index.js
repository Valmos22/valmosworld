import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postCont } from './postCont'
import { postType } from './postType'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, postCont],
}
