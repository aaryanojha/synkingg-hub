export default class SynKinggServer {
  constructor(party) {
    this.party = party;
  }

  onConnect(conn) {
    conn.setState({ username: "Connecting...", isHost: false });
  }

  onClose(conn) {
    this.broadcastMembers();
  }

  onMessage(message, sender) {
    const event = JSON.parse(message);

    if (event.type === 'JOIN') {
      sender.setState({ username: event.username, isHost: event.isHost });
      this.broadcastMembers();
    } 
    else if (event.type === 'UPDATE_NAME') {
      sender.setState({ ...sender.state, username: event.newName });
      this.broadcastMembers();
    }
    else if (event.type === 'CHAT') {
      this.party.broadcast(JSON.stringify({
        type: 'CHAT', username: sender.state.username, text: event.text, isHost: sender.state.isHost
      }));
    }
    // Handle ALL video sync and setting commands
    else if (['PLAY', 'PAUSE', 'SEEK', 'SYNC', 'SETTINGS_UPDATE'].includes(event.type)) {
      // Broadcast to everyone EXCEPT the person who sent it
      this.party.broadcast(JSON.stringify(event), [sender.id]); 
    }
  }

  broadcastMembers() {
    const members = Array.from(this.party.getConnections()).map(c => c.state);
    this.party.broadcast(JSON.stringify({ type: 'MEMBERS_UPDATE', members }));
  }
}