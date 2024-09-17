import React from "react";

class AddContact extends React.Component {
  
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
          <label>Name</label><br />
<input type="text" name="name" placeholder="Name" />

          </div>
          <div className="field">
            <label>Email</label>
            <br />
            <input type="text"  name ="email" placeholder="Email" />
          </div>
          <button className="ui button blue" >Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;