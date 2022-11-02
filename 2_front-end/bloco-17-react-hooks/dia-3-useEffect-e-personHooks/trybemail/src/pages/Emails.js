import React, { useState, useContext, useEffect } from "react";
import EmailsContext from '../context/EmailsContext';
import Header from "../components/Header";
import '../styles/Emails.css';

function Emails() {
  const { read, setRead } = useContext(EmailsContext);
  
  // useEffect(() => {
  //   setRead(true)
  // })

  return (
    <div className="container-emails">
      <Header />
      <button
      // onClick={}
      >
        Marcar todas como lida
      </button>
      <button
      // onClick={}
      >
        Marcar todas como não lida
      </button>
      <div className="emails-inbox">
        <div>
          <p className={`${read ? 'read' : 'not-read'}`}
          onClick={setRead(false)}
          >
            Olá, tenho uma vaga que bate com o seu perfil, podemos marcar uma
            conversa?
            <button
            onClick={() => setRead(true)}
            >
              <abbr title="Marcar como lida">✅</abbr>
            </button>
            <button>
              <abbr title="Marcar como não lida">❌</abbr>
            </button>
          </p>
        </div>
        <div>
          <p className={`${read ? 'read' : 'not-read'}`}>
            Parabéns! Você avançou no processo de vaga Pessoa Desenvolvedora.
            <button>
              <abbr title="Marcar como lida">✅</abbr>
            </button>
            <button>
              <abbr title="Marcar como não lida">❌</abbr>
            </button>
          </p>
        </div>
        <div>
          <p className={`${read ? 'read' : 'not-read'}`}>
            RE: Entrevista marcada.
            <button>
              <abbr title="Marcar como lida">✅</abbr>
            </button>
            <button>
              <abbr title="Marcar como não lida">❌</abbr>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Emails;
