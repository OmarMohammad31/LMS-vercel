export type TutoringRequestStatus =
  | 'open' | 'accepted' | 'confirmed' | 'expired' | 'failed_transfer';

export interface TutoringRequest {
  _id: string;
  learnerId: string | { _id: string; name: string; email: string };
  topic: string;
  status: TutoringRequestStatus;
  tutorId?: string;
  sessionId?: string;
  learnerConfirmed: boolean;
  tutorConfirmed: boolean;
  confirmationDeadline?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AcceptRequestPayload {
  startTime: string;
  durationMinutes: number;
}
