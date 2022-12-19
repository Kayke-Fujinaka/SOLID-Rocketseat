import { Appointment } from "../entities/appointment";

interface CreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateAppointmentResponse = CreateAppointmentRequest;

export class CreateAppointment {
  async execute({
    customer,
    startsAt,
    endsAt,
  }: CreateAppointmentResponse): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment({ customer, startsAt, endsAt });

    return appointment;
  }
}
