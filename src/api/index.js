import {AuthResource} from './resources'

export default {
  authorize(){
    return AuthResource.get()
  }
}