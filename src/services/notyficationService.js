import { toast } from 'react-hot-toast';

class NotificationService {
    error(message) {
        toast.error(message);
    }
}

export const notify = new NotificationService();
