import React, { useState } from 'react';
import Daypicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Appointment,
  Section,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  // const { selectedDate, setSelectedDate } = useState(new Date());
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span> Bem vindo</span>
              <strong> {user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários Agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="http://localhost:3333/files/2a8ea1722c8cc64dc3e6-avatar.jpg"
                alt="Conrado Alexsander"
              />
              <strong>Conrado Alexsander</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="http://localhost:3333/files/2a8ea1722c8cc64dc3e6-avatar.jpg"
                  alt="Conrado Alexsander"
                />
                <strong>Conrado Alexsander</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/2a8ea1722c8cc64dc3e6-avatar.jpg"
                  alt="Conrado Alexsander"
                />
                <strong>Conrado Alexsander</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <Daypicker weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']} />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
