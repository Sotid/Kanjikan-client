import React from "react";
import News from "../../components/News/News"
import Radio from "../../components/Radio/Radio"


 class Resources extends React.Component {
     state= {
        showEdit:false
     }


     toggleEdit = () => {
        this.setState({ showEdit: !this.state.showEdit });
      }

     render () {
    return (
        <div>
        <p>News</p>
        <button onClick={this.toggleEdit}>Show More</button>
          {this.state.showEdit ? <News /> : null}

          <Radio />
        </div>


    )
}
 }

export default Resources;