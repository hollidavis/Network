import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'
class ProfilesService {
  async getAllProfiles(query = {}) {
    const res = await api.get('api/profiles' + convertToQuery(query))
    logger.log(res.data)
    AppState.profiles = res.data
  }
}

export const profilesService = new ProfilesService()
