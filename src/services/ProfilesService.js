import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'
class ProfilesService {
  async getAllProfiles(query = {}) {
    const res = await api.get('api/profiles' + convertToQuery(query))
    AppState.profiles = res.data
  }

  async getProfileById(id) {
    const res = await api.get('api/profiles/' + id)
    logger.log(res.data)
    AppState.activeProfile = res.data
  }
}

export const profilesService = new ProfilesService()
