import { toast } from 'react-hot-toast';

class NotificationService {
    success(message) {
        toast.success(message);
    }
    error(message) {
        toast.error(message);
    }
}

export const notify = new NotificationService();
