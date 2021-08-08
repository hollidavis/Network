import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'
class PostsService {
  async getAllPosts(query = {}) {
    const res = await api.get('api/posts' + convertToQuery(query))
    AppState.posts = res.data
  }

  async getNextPosts(query = {}) {
    const res = await api.get('api/posts?page=' + AppState.page)
    AppState.posts = res.data
  }
}

export const postsService = new PostsService()
