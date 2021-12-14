import Api from '@/services/Api';

export default {
    sendMessage(message) {
        return Api().post('/contact', message)
    }
}