import { AppState } from '../AppState'
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

  async destroyPost(id) {
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.post.filter(p => p.id !== id)
  }
}

export const postsService = new PostsService()
