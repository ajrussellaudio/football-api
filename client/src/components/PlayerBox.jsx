var React = require("react");

var PlayerSelector = require('./PlayerSelector')
var PlayerDetail = require('./PlayerDetail');

var PlayerBox = React.createClass({

  getInitialState: function() {
    return {
      players: [],
      focusPlayer: null
    }
  },

  componentDidMount: function() {
    var request = new XMLHttpRequest();
    request.open('GET', this.props.url);
    request.onload = function() {
      var data = JSON.parse( request.responseText );
      this.setState({ players: data.players })
    }.bind(this);
    request.send();
  },

  setFocusPlayer: function(index){
    this.setState({
      focusPlayer: this.state.players[index]
    })
  },

  render: function() {
    return (
      <div>
        <PlayerSelector 
          players={this.state.players} 
          selectPlayer={this.setFocusPlayer}/>
        <PlayerDetail player={this.state.focusPlayer}/>
      </div>
    )
  }

})

module.exports = PlayerBox;