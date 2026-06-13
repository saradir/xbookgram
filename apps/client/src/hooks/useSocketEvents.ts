import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import socket from '../lib/socket.js';
import { toast } from 'sonner';
import { formatNotificationMessage } from '@/lib/utils.js';

export function useSocketEvents() {
  const queryClient = useQueryClient();

  useEffect(() => {
    socket.on('notification', (notification) => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      toast(formatNotificationMessage(notification), {
        position: 'bottom-right',
      });
    });

    return () => {
      socket.off('notification');
    };
  }, [queryClient]);
}
