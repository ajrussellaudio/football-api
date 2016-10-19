var React = require('react');

var PlayerDetail = function(props){

  if (!props.player){
    return <h3>No player selected </h3>
  }

  var marketValue = props.player.marketValue;

  if(!marketValue){
    marketValue = "Priceless"
  }

  return (
    <div>
    <h3>{props.player.name}</h3>
    <ul>     
      <li>Position: {props.player.position}</li>
      <li>Squad Number: {props.player.jerseyNumber}</li>
      <li>Nationality: {props.player.nationality}</li>
      <li>Market Value: {marketValue}</li>
    </ul>
    </div>
    )


}

module.exports = PlayerDetail;