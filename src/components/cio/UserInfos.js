function Infos(){
  return(
    <>
    <div id="firstRowthird">
        <ul id="agentinfos">
            <li> Routing Profile: <span id="routingProfile"></span></li>
            <li>Agent State: <span id="State"></span></li>
            <li>State TimeStamp: <span id="TimeStamp"></span></li>
            <li>State Duration: <span id="Duration"></span></li>
            <li>Ligações em Fila: <span id="calls"></span></li>
            <li>Maior tempo em fila: <span id="lwt"></span></li>
            <li>Agentes disponíveis: <span id="avaliableAgents"></span></li>

            <li>Agentes Online: <span id="onlineAgents"></span></li>
        </ul>
        <button id="exportarLogButton">Infrastructure Log</button>    
    </div>
    </>
  )
}

export default Infos