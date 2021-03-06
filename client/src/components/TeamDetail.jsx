var React = require("react");
var PlayerBox = require("./PlayerBox.jsx");

var TeamDetail = function( props ) {
  if( !props.team ){
    return <h3>Select a team</h3>
  }

  return (
    <div>
    <h3>{props.team.name}</h3>
    <img src={props.team.crestUrl} width="100"/>
    <ul>
      <li>Squad market value: {props.team.squadMarketValue}</li>
    </ul>
    <PlayerBox url={props.team['_links'].players.href}/>
    </div>
  )
}

module.exports = TeamDetail;