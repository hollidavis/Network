import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'
class PostsService {
  async getAllPosts(query = {}) {
    const res = await api.get('api/posts' + convertToQuery(query))
    AppState.posts = res.data
  }

  async createPost() {

  }
}

export const postsService = new PostsService()
