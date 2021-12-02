import { Subjects } from './subjects';

export interface OrderFinishEvent {
  subject: Subjects.OrderFinish;
  data: {
    id: string;
    route: {
      id: string;
    };
  };
}
