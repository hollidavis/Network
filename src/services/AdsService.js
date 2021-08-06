import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
class AdsService {
  async getAllAds() {
    try {
      const res = await api.get('/ads')
      AppState.ads = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const adsService = new AdsService()
