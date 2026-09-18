export type SessionType = 'LiveClass' | 'PeerTutoring';
export type SessionStatus = 'scheduled' | 'completed';

export interface Session {
  _id: string;
  type: SessionType;
  title: string;
  description?: string;
  startTime: string;
  durationMinutes: number;
  capacity: number;
  hostId: string;
  attendeeIds: string[];
  googleEventId?: string;
  meetLink?: string;
  status: SessionStatus;
  isFull?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSessionPayload {
  title: string;
  description?: string;
  startTime: string;
  durationMinutes: number;
  capacity: number;
}
