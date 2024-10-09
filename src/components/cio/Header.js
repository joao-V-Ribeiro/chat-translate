function Header() {
  return (
    <>
      <div class="divinheader">
        <div id="logo">
          <i class="fa fa-headset fa-xl dotGrey" id="agentStatus"></i>
          <span id="Name"></span>
        </div>

        <div id="support" style={{ display: "none" }}>
          <a id="supportbtn" class="navlink">
            support
          </a>
          <div class="supportlist">
            <a
              href="https://support.accenture.com/incident.do?sys_id=-1&sysparm_query=active=true&sysparm_stack=incident_list.do?sysparm_query=active=true"
              target="_blank"
            >
              Novo Incidente
            </a>
            <a
              href="https://ts.accenture.com/sites/SDCIO/Lists/Registro%20de%20Ocorrncias%20FY23/NewForm.aspx?Source=https%3A%2F%2Fts%2Eaccenture%2Ecom%2Fsites%2FSDCIO%2FLists%2FRegistro%2520de%2520Ocorrncias%2520FY23%2FAllItems%2Easpx&RootFolder="
              target="_blank"
            >
              Registro de Ocorrência
            </a>
            <a
              href="https://directory.accenture.com/ResetPassword/"
              target="_blank"
            >
              Password Reset
            </a>
            <a
              href="https://bi13.accenture.com/QvAJAXZfc/opendoc.htm?document=protectmytech_azure_reports%5Casset%20lookup.qvw"
              target="_blank"
            >
              Asset LookUp
            </a>
            <a
              href="https://ts.accenture.com/sites/LTSBrazil/ckb/Lists/CKB/Last%20Five.aspx"
              target="_blank"
            >
              CKB - Base de Conhecimento
            </a>
            <a href="https://support.accenture.com/air" target="_blank">
              AIR
            </a>
            <a
              href="https://amazon-connect-jde-stream-popup.s3.amazonaws.com/CIO/links/registro_de_mac_erro/registro_mac_erro.html"
              target="_blank"
            >
              MAC: Enroll- Dispositivo Não Seguro
            </a>
            <a
              href="https://amazon-connect-jde-stream-popup.s3.amazonaws.com/CIO/links/mac_maquina_duplicada/mac_maquina_duplicada.html"
              target="_blank"
            >
              MAC: Máquina Duplicada
            </a>
            <a
              href="https://amazon-connect-jde-stream-popup.s3.amazonaws.com/CIO/links/mac_senha_sincronizacao/mac_senha_sincronizacao.html"
              target="_blank"
            >
              MAC: Sincronização de Senha
            </a>
            <a
              href="hhttps://amazon-connect-jde-stream-popup.s3.amazonaws.com/CIO/links/mac_acesso_remoto/mac_acesso_remoto.html"
              target="_blank"
            >
              MAC: Acesso Remoto
            </a>
          </div>
        </div>

        <nav class="navbar">
          <ul id="navbarnavconnect">
            <li class="navitem">
              <a class="navlink" id="connectAWS">
                Login
              </a>
            </li>
          </ul>
          <ul id="navbarnav" style={{ display: "none" }}>
            <li class="navitem">
              <span id="divisor">|</span>
            </li>
            <li class="navitem">
              <a class="navlink" onclick="openAgentMetrics()">
                Agent Metrics{" "}
              </a>
            </li>
            <li class="navitem">
              <span id="divisor">|</span>
            </li>
            <li class="navitem">
              <a class="navlink" id="getConnectionlog">
                Dados da Conexão
              </a>
            </li>
          </ul>
        </nav>

        <a class="navlink" id="logout" style={{ visibility: "hidden" }}>
          Logout<i class="fa fa-right-from-bracket"></i>
        </a>
      </div>
    </>
  );
}

export default Header;
