import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'
class PostsService {
  async getAllPosts(query = {}) {
    const res = await api.get('api/posts' + convertToQuery(query))
    AppState.posts = res.data
  }

  async createPost(newPost) {
    await api.post('api/posts', newPost)
    await this.getAllPosts()
  }
}

export const postsService = new PostsService()
