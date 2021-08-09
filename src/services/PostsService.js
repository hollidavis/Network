import { AppState } from '../AppState'
import { convertToQuery } from '../utils/Query'
import { api, blank } from './AxiosService'

class PostsService {
  async getAllPosts(query = {}) {
    const res = await api.get('api/posts' + convertToQuery(query))
    AppState.posts = res.data
  }

  async getOlder(older) {
    const res = await blank.get(older)
    AppState.posts = res.data
  }

  async getNewer(newer) {
    const res = await blank.get(newer)
    AppState.posts = res.data
  }

  async createPost(newPost) {
    await api.post('api/posts', newPost)
    await this.getAllPosts()
  }

  async destroyPost(id) {
    await api.delete('api/posts/' + id)
    await this.getAllPosts()
  }
}

export const postsService = new PostsService()
